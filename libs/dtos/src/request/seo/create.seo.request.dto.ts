import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeoRequestDto{
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