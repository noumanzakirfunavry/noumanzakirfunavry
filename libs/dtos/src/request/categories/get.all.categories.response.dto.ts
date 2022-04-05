import { IsArray, IsBoolean, IsBooleanString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllCategoriesRequestDto extends PaginatedRequestDto{

    @IsOptional()
    @IsArray()
    parentCategoryId:number[]

    @IsOptional()
    @IsArray()
    publishers:number[]

    @IsOptional()
    @IsBooleanString()
    status:boolean

    @IsOptional()
    @IsBooleanString()
    includeNews:boolean

    @IsOptional()
    @IsNumberString()
    newsLimit:number

    @IsOptional()
    @IsString()
    title:string
}