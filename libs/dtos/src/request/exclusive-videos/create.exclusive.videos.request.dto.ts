import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExclusiveVideosRequestDto{
    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsNumber()
    position : number
    
    @IsNotEmpty()
    @IsNumber()
    newsId : number
}