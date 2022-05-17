import { GenericResponseDto, GetAllLogsRequestDto } from '@cnbc-monorepo/dtos';
import { ChangeLogs, Sessions, Users } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LogsService {
	constructor(
		@Inject('CHANGE_LOGS_REPOSITORY') private logsRepo: typeof ChangeLogs,
		@Inject('SESSIONS_REPOSITORY') private sessionsRepo: typeof Sessions,
		private helperService: Helper

	) { }

	async getAllLogs(getAllLogsDto: GetAllLogsRequestDto): Promise<GenericResponseDto> {
		const logs = await this.logsRepo.findAndCountAll({
			where: {
				sessionId: getAllLogsDto.sessionId
			},
			// include: {
			// 	model: Users.scope('basicScope')
			// },
			order: [['updatedAt', 'DESC']],
			limit: getAllLogsDto.limit,
			offset: this.helperService.offsetCalculator(getAllLogsDto.pageNo, getAllLogsDto.limit)
		});

		if (logs.count === 0) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			);
		}

		return new GenericResponseDto(HttpStatus.OK, 'Request Successful', {
			logs: logs.rows,
			totalCount: logs.count
		})
	}
}
