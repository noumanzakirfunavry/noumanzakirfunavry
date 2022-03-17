import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateQuoteRequestDto
{
    @IsNotEmpty()
    @IsString()
    name:string
}