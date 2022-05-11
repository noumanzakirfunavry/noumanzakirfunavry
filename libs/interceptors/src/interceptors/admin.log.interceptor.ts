import { ChangeLogs } from '@cnbc-monorepo/entity';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loggableRequests } from '../resources/loggable.requests';

@Injectable()
export class AdminLogInterceptor implements NestInterceptor {
	constructor(@Inject('CHANGE_LOGS_REPOSITORY') private logsRepository: typeof ChangeLogs) { }
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next
			.handle()
			.pipe(
				tap(() => {
					const { req } = context.switchToHttp().getResponse()
					if (req.user && (req.method === 'PUT' || req.method === 'POST')) {
						const method: string = req.method
						const resource: string = req.url.split('/')[4]
						const endpoint: string = req.url.split('/')[5]

						const loggableRequest = loggableRequests[resource][method][endpoint]
						this.logsRepository.create({
							changeType: loggableRequest.action,
							entityType: loggableRequest.entity,
							changes: JSON.stringify(req.params),
							ipAddress: req.ip,
							sessionId: req.user.sessionId,
							changedBy: req.user.data.id
						}).catch(err => console.log(err))
					}
				}),
			);
	}
}