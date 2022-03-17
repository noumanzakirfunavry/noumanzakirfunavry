import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSeoRequestDto{

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    id : number

    @IsNotEmpty()
    @IsString()
    slugLine : string

    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsString()
    keywords : string
}