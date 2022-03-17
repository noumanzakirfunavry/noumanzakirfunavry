import { IsNotEmpty, IsNumberString } from "class-validator";

export class GetSocialMediaLinkByIdRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    id : number
}