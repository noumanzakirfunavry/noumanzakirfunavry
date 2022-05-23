import { IsNotEmpty, IsString } from "class-validator";

export class GetCategoryByTitleRequestDto{
	@IsString()
	@IsNotEmpty()
	title: string
}