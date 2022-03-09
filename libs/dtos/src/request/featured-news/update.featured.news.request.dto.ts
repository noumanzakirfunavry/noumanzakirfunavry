import { SectionTypes } from "@cnbc-monorepo/enums";
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

export class UpdateFeaturedNewsRequestDto{
   @ArrayNotEmpty()
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => FeaturedNews)
   news :  FeaturedNews[]
}
export class FeaturedNews{
    @IsNotEmpty()
    @IsNumber()
    position : number

    @IsNotEmpty()
    @IsEnum(SectionTypes)
    section : string

    @IsNotEmpty()
    @IsNumber()
    newsId : number
} 