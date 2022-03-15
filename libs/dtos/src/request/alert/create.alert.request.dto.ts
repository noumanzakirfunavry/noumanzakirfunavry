import { IsBoolean, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateAlertRequestDto{
    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsUrl()
    url : string

    @IsNotEmpty()
    @IsBoolean()
    needToSend : boolean
}