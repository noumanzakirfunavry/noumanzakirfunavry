import { ArrayNotEmpty, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RegisterAdminRequestDto{
    @IsString()
    @IsNotEmpty()
    name : string

    @IsNumber()
    @IsNotEmpty()
    rolesId : number

    @IsString()
    @IsNotEmpty()
    userName : string

    @IsString()
    @IsNotEmpty()
    password : string

    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsBoolean()
    @IsNotEmpty()
    isActive : boolean

    @IsArray()
    @ArrayNotEmpty()
    rights = []
}