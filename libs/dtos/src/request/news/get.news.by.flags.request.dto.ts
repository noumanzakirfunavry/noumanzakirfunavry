import { Type } from "class-transformer";
import { IsBooleanString, IsNumber, IsOptional, Min } from "class-validator";

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

	@IsOptional()
	@IsBooleanString()
	isExclusiveVideos: boolean;

	@IsNumber()
	@Min(1)
	@Type(() => Number)
	limit: number;

	@IsNumber()
	@Min(1)
	@Type(() => Number)
	pageNo: number;
}
