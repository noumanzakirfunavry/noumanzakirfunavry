import { IsBoolean, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateSocialMediaLinkRequestDto{
    @IsNotEmpty()
    @IsString()
    platform : string

    @IsNotEmpty()
    @IsUrl()
    url : string

    @IsNotEmpty()
    @IsBoolean()
    isActive : boolean
}