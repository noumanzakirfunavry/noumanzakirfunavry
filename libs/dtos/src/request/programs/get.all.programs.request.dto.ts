import { IsBooleanString, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class GetAllProgramsRequestDto{
    
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number

    @IsOptional()
    @IsNumberString()
    publisherId : number

    @IsOptional()
    @IsBooleanString()
    isActive : boolean

    @IsOptional()
    @IsString()
    search : string
}