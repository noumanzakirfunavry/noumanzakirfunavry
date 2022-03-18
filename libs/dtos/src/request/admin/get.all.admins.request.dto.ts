import { IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class GetAllAdminsRequestDto{
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