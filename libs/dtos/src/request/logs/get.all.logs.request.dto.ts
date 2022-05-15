import { Type } from "class-transformer";
import { IsNumber, IsNumberString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllLogsRequestDto extends PaginatedRequestDto {
	@IsNumberString()
	sessionId: number
}