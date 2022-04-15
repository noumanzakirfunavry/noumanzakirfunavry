import { IsArray, IsBoolean, IsBooleanString, IsNotEmpty, IsNumber, IsOptional, IsString, isValidationOptions } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllTagsRequestDto extends PaginatedRequestDto
{
    @IsOptional()
    @IsString()
    title:string
    
    @IsOptional()
    @IsBooleanString()
    status:boolean

    @IsOptional()
		@IsNumber()
    publisher: number

}