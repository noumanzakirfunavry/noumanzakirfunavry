import {  IsNotEmpty,IsNumberString, IsOptional } from "class-validator";

export class GetAllLiveStreamLinksRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number

    @IsOptional()
    search : string

    @IsOptional()
    isActive : boolean

}