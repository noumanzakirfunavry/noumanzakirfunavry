import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class NewsHasQuotesRequestDto{
    @IsNotEmpty()
    @IsString()
    quoteSymbol : string
 
    @IsNotEmpty()
    @IsString()
    quoteTitle : string
 
    @IsNotEmpty()
    @IsNumber()
    quoteTickerId : number
}