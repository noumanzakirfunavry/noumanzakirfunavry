import {   IsNotEmpty, IsNumberString, IsOptional } from "class-validator"

export class GetAllSocialMediaLinksRequestDto{


    @IsOptional()
    search : string

    @IsOptional()
    isActive : boolean

    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number
}