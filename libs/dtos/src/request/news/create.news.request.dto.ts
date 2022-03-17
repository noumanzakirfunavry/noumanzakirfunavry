import { ContentTypes, NewsTypes } from "@cnbc-monorepo/enums";
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, ValidateNested } from "class-validator";
import { CreateSeoRequestDto } from "../seo/create.seo.request.dto";

export class CreateNewsRequestDto{

    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    content : string

    @IsNotEmpty()
    @IsBoolean()
    isPro : boolean

    @IsNotEmpty()
    @IsBoolean()
    visible : boolean

    @IsNotEmpty()
    @IsEnum(ContentTypes)
    contentType : string

    @IsOptional()
    videoId : number

    @IsOptional()
    thumbnailId : number

    @IsOptional()
    imageId : number

    @IsNotEmpty()
    @IsString()
    authorName : string

    @IsOptional()
    facebookLink : string

    @IsOptional()
    twitterLink : string

    @IsNotEmpty()
    @IsEnum(NewsTypes)
    newsType : string

    @IsNotEmpty()
    @IsBoolean()
    showOnHomepage : boolean

    @IsNotEmpty()
    @IsBoolean()
    isActive : boolean

    @IsNotEmpty()
    @ValidateNested({each : true})
    @Type(() => CreateSeoRequestDto)
    seoDetails : CreateSeoRequestDto

    @IsArray()
    @ArrayNotEmpty()
    @IsOptional()
    tagsIds : number[]

    @IsArray()
    @ArrayNotEmpty()
    @IsOptional()
    quotesIds : []

    @IsArray()
    @ArrayNotEmpty()
    categoryIds : number[]

}
