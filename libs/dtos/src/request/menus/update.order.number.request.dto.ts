import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class UpdateOrderNumberRequestDto {
	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	orderNo?: number;

	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	parentMenuId?: number;
}