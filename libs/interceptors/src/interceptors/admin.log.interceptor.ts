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
						const splittedUrl = req.url.split('/')
						const resource: string = splittedUrl[4] ?? null
						const endpoint: string = splittedUrl[5] ?? null
						const loggableRequest = loggableRequests?.[resource]?.[method]?.[endpoint]
						if (loggableRequest) {
							this.logsRepository.create({
								changeType: loggableRequest.action,
								entityType: loggableRequest.entity,
								changes: Object.keys(req.params).length > 0 ? JSON.stringify(req.params) : null,
								ipAddress: req.ip,
								sessionId: req.user.sessionId,
								changedBy: req.user.data.id
							}).catch(err => console.log(err))
						}
					}
				}),
			);
	}
}