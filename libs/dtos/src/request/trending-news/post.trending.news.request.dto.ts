import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsUrl, ValidateNested } from "class-validator";

export class UpdateTrendingNewsRequestDto{
   @ArrayNotEmpty()
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => TrendingNews)
   news :  TrendingNews[]
}
export class TrendingNews{
    @IsNotEmpty()
    @IsNumber()
    position : number

    @IsNotEmpty()
    @IsUrl()
    externalURL : string

    @IsNotEmpty()
    @IsNumber()
    newsId : number
} 