import { GenderTypes } from "@cnbc-monorepo/enums";
import { IsBoolean, IsDate, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreatePresentersRequestDto{
    @IsNotEmpty()
    @IsString()
    name : string

    @IsNotEmpty()
    @IsNumber()
    age : number

    @IsNotEmpty()
    @IsEnum(GenderTypes)
    gender : string

    @IsNotEmpty()
    @IsDateString()
    dob : string

    @IsNotEmpty()
    @IsDateString()
    joinedNetworkOn : string

    @IsNotEmpty()
    @IsUrl()
    twitterLink : string

    @IsNotEmpty()
    @IsUrl()
    facebookLink : string

    @IsNotEmpty()
    @IsUrl()
    instagramLink : string

    @IsNotEmpty()
    @IsUrl()
    linkedInLink : string

    @IsNotEmpty()
    @IsString()
    jobPosition : string

    @IsNotEmpty()
    @IsBoolean()
    isActive : boolean

    @IsOptional()
    attachmentsId : number
}