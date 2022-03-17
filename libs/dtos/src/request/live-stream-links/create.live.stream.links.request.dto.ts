import { IsBoolean, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateLiveStreamLinksRequestDto{
    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string


    @IsNotEmpty()
    @IsUrl()
    liveStreamURL : string

    @IsNotEmpty()
    @IsBoolean()
    isActive : boolean
}