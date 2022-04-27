import { IsArray, IsBoolean, IsBooleanString, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator"
import { PaginatedRequestDto } from "../pagination.request.dto"

export class GetAllBreakingNewsRequestDto extends PaginatedRequestDto{
    @IsOptional()
    @IsNumberString()
    publisher: number

    @IsOptional()
    @IsBooleanString()
    status: boolean

    @IsOptional()
    @IsString()
    title:string
}