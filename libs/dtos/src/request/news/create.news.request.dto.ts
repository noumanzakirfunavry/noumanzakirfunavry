import { ContentTypes, NewsTypes } from "@cnbc-monorepo/enums";
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, MaxLength, ValidateNested } from "class-validator";
import { CreateSeoRequestDto } from "../seo/create.seo.request.dto";
import { NewsHasQuotesRequestDto } from "./news.has.quotes.request.dto";

export class CreateNewsRequestDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    title: string

    @IsNotEmpty()
    @IsString()
    // @MaxLength(1500)
    content: string

    @IsNotEmpty()
    @IsBoolean()
    isPro: boolean

    @IsNotEmpty()
    @IsBoolean()
    visible: boolean

    @IsNotEmpty()
    @IsEnum(ContentTypes)
    contentType: string

    @IsOptional()
    videoId: number

    @IsOptional()
    thumbnailId: number

    @IsOptional()
    imageId: number

    @IsNotEmpty()
    @IsString()
    authorName: string

    @IsOptional()
    facebookLink: string

    @IsOptional()
    twitterLink: string

    @IsNotEmpty()
    @IsEnum(NewsTypes)
    newsType: string

    @IsNotEmpty()
    @IsBoolean()
    showOnHomepage: boolean

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean

    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateSeoRequestDto)
    seoDetails: CreateSeoRequestDto

    @IsArray()
    @ArrayNotEmpty()
    @IsOptional()
    tagsIds: number[]

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => NewsHasQuotesRequestDto)
    @IsOptional()
    quotes: NewsHasQuotesRequestDto[]

    @IsArray()
    @ArrayNotEmpty()
    categoryIds: number[]

}
