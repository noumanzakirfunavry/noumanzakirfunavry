import { IsArray, IsBoolean, IsBooleanString, IsOptional, IsString } from "class-validator"
import { PaginatedRequestDto } from "../pagination.request.dto"

export class GetAllBreakingNewsRequestDto extends PaginatedRequestDto{
    @IsOptional()
    @IsArray()
    publishers:number[]

    @IsOptional()
    @IsBooleanString()
    status:Boolean

    @IsOptional()
    @IsString()
    title:string
}