import { Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, GetAllLogsRequestDto } from '@cnbc-monorepo/dtos';
import { RoleTypes } from '@cnbc-monorepo/enums';
import { Controller, Get, Query } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('admin/api/admin/logs')
@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
export class LogsController {
	constructor(private readonly logsService: LogsService) { }
	@Get('/getAll')
	async getAllLogs(@Query() getAllLogsDto: GetAllLogsRequestDto): Promise<GenericResponseDto> {
		return await this.logsService.getAllLogs(getAllLogsDto)
	}
}
