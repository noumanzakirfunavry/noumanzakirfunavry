import { SectionTypes } from "@cnbc-monorepo/enums";
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateFeaturedNewsRequestDto{
   @ArrayNotEmpty()
   @IsArray()
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