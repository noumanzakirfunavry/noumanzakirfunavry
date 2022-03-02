import {  IsBooleanString, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator"

export class GetAllSocialMediaLinksRequestDto{


    @IsOptional()
    search : string

    @IsNotEmpty()
    @IsBooleanString()
    isActive : boolean

    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number
}