import { Transform } from "class-transformer";
import { IsArray, IsBoolean, IsNumberString, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllCategoriesRequestDto extends PaginatedRequestDto{
    @IsOptional()
		@IsNumberString()
    publishedBy: number

    @IsOptional()
    @IsBoolean()
		@Transform((input) => {
			if (input.value === 'true' || input.value === '1') return true;
			if (input.value === 'false' || input.value === '0') return false;
			return input.value;
		})
    isActive:boolean

		@IsOptional()
		@Transform((input) => {
			if (input.value === 'true' || input.value === '1') return true;
			if (input.value === 'false' || input.value === '0') return false;
			return input.value;
		})
    @IsBoolean()
    displayInHomePage:boolean

		@IsOptional()
    @IsBoolean()
		@Transform((input) => {
			if (input.value === 'true' || input.value === '1') return true;
			if (input.value === 'false' || input.value === '0') return false;
			return input.value;
		})
    displayInCategoryMenu:boolean

    @IsOptional()
    @IsBoolean()
		@Transform((input) => {
			if (input.value === 'true' || input.value === '1') return true;
			if (input.value === 'false' || input.value === '0') return false;
			return input.value;
		})
    includeNews: boolean

    @IsOptional()
    @IsNumberString()
    newsLimit:number

    @IsOptional()
    @IsString()
    title:string
}