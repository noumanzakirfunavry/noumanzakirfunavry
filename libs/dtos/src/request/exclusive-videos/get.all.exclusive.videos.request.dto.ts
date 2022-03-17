import { IsNotEmpty, IsNumberString } from "class-validator";

export class GetAllExclusiveVideos{
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number
}