import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllCategoriesRequestDto extends PaginatedRequestDto{

    @IsOptional()
    @IsArray()
    parentCategoryId:number[]

    @IsOptional()
    @IsArray()
    publishers:number[]

    @IsOptional()
    @IsBoolean()
    status:Boolean

    @IsOptional()
    @IsBoolean()
    includeNews:Boolean

    @IsOptional()
    @IsNumber()
    newsLimit:number

    @IsOptional()
    @IsString()
    title:string
}