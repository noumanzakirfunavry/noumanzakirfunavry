import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString, isValidationOptions } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllTagsRequestDto extends PaginatedRequestDto
{
    @IsOptional()
    @IsString()
    title:string
    
    @IsOptional()
    @IsBoolean()
    status:boolean

    @IsOptional()
    @IsArray()
    publishers:number[]

}