import { IsBoolean, IsBooleanString, IsOptional } from "class-validator";

export class GetNewsByFlagsRequestDto {
	@IsOptional()
	@IsBooleanString()
	isFeatured: boolean;

	

	@IsOptional()
	@IsBooleanString()
	isTrending: boolean;

	@IsOptional()
	@IsBooleanString()
	isEditorsChoice: boolean;

	@IsOptional()
	@IsBooleanString()
	isBreaking: boolean;
}
