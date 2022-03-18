import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateSeoRequestDto } from "../seo/create.seo.request.dto";

export class CreateEpisodeRequestDto{

    @IsNotEmpty()
    @IsDateString()
    airedOn : Date

    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsBoolean()
    isActive : boolean

    @IsNotEmpty()
    @IsNumber()
    programId : number

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    videoId : number

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    thumbnailId : number

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
    quotesIds : number[]
}
