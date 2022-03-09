import { IsArray, IsBoolean, IsBooleanString, IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class AddBranchRequestDto{
    
    
    @IsNotEmpty()
    @IsString()
    title:string

    @IsString()
    @IsNotEmpty()
    phone:string

    @IsString()
    @IsNotEmpty()
    fax:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    zipCode:string

    @IsString()
    @IsNotEmpty()
    addressLine1:string

    @IsString()
    @IsOptional()
    addressLine2:string


    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean

}