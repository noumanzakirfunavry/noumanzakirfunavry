import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Min } from "class-validator";

export class GetAllPresentersRequestDto{
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

    @IsOptional()
    publisher : boolean
}