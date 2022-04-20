import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class UpdateOrderNumberRequestDto {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	orderNo?: number;

	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	parentMenuId?: number;
}