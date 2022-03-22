import { NewsTypes } from "@cnbc-monorepo/enums";
import { IsDateString, IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class GetAllNewsRequestDto {
    @IsNotEmpty()
    @IsNumberString()
    limit: number

    @IsNotEmpty()
    @IsNumberString()
    pageNo: number

    @IsDateString()
    @IsOptional()
    date: string

    @IsEnum(NewsTypes)
    @IsOptional()
    newsType: string

    @IsOptional()
    categoryId: number

    @IsOptional()
    publishedBy: number

    @IsOptional()
    isActive: boolean

    @IsOptional()
    search: string

}