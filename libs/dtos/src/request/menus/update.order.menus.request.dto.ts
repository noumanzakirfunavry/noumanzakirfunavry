import { IsArray, IsNotEmpty } from "class-validator";
export class UpdateOrderMenusRequestDto {
	@IsNotEmpty()
	@IsArray()
	ids:number[] 
}