import { IsArray, IsBoolean, IsBooleanString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, isValidationOptions } from "class-validator";
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
		@IsNumberString()
    publisher: number

}