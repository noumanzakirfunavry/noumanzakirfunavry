import { IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator"

export class AddTagRequestDto{

    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean
}