import { IsNotEmpty, IsString } from "class-validator";

export class AddQuoteRequestDto{
    @IsNotEmpty()
    @IsString()
    name:string
}