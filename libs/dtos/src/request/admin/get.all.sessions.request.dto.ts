import { IsDateString, IsNotEmpty, IsNumberString, IsOptional } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllSessionsRequestDto extends PaginatedRequestDto {
	@IsOptional()
	@IsNotEmpty()
	@IsNumberString()
	userId: number

	@IsNotEmpty()
	@IsDateString()
	@IsOptional()
	date: Date
}