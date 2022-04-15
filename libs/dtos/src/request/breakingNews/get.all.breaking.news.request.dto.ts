import { IsArray, IsBoolean, IsBooleanString, IsNumber, IsOptional, IsString } from "class-validator"
import { PaginatedRequestDto } from "../pagination.request.dto"

export class GetAllBreakingNewsRequestDto extends PaginatedRequestDto{
    @IsOptional()
    @IsNumber()
    publisher: number

    @IsOptional()
    @IsBooleanString()
    status: boolean

    @IsOptional()
    @IsString()
    title:string
}