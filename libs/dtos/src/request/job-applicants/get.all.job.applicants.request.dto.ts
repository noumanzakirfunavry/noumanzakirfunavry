import { IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class GetAllJobApplicantsRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number

    @IsOptional()
    search : string

    @IsOptional()
    jobsId : number

    @IsOptional()
    date : string
}