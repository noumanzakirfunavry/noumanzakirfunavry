import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class UpdateTrendingNewsRequestDto{
   @ArrayNotEmpty()
   @IsArray()
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