import { IsBoolean, IsBooleanString, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class GetAllEpisodesRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    search : string

    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    isActive : boolean

    @IsNotEmpty()
    @IsNumberString()
    @IsOptional()
    publishedBy : number

    @IsNotEmpty()
    @IsNumberString()
    @IsOptional()
    programId : number

    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    date : Date
}