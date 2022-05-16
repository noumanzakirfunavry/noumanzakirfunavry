import { IsBoolean, IsBooleanString, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllEpisodesRequestDto extends PaginatedRequestDto{
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