import { ArrayNotEmpty, IsArray, IsBooleanString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Min } from "class-validator";

export class GetAllPresentersRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo : number

    @IsOptional()
    title : string

    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    isActive : boolean

    @IsOptional()
    @IsNumberString()
		publisher : number
}