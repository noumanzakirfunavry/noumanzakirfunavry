import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator"
import { PaginatedRequestDto } from "../pagination.request.dto"

export class GetAllBreakingNewsRequestDto extends PaginatedRequestDto{
    @IsOptional()
    @IsArray()
    publishers:number[]

    @IsOptional()
    @IsBoolean()
    status:Boolean

    @IsOptional()
    @IsString()
    title:string
}