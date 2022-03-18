import { IsArray, IsBoolean, IsBooleanString, IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateBranchRequestDto{
    
    @IsOptional()
    @IsString()
    title:string

    @IsString()
    @IsOptional()
    phone:string

    @IsString()
    @IsOptional()
    fax:string

    @IsEmail()
    @IsOptional()
    email:string

    @IsString()
    @IsOptional()
    zipCode:string

    @IsString()
    @IsOptional()
    addressLine1:string

    @IsString()
    @IsOptional()
    addressLine2:string


    @IsOptional()
    @IsBoolean()
    isActive:Boolean

}