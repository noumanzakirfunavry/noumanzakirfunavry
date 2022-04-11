import { IsBooleanString, IsOptional } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetNewsByFlagsRequestDto extends PaginatedRequestDto {
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
