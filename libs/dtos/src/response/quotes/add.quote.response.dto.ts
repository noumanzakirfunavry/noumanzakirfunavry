import { Quotes } from "@cnbc-monorepo/entity"

export class AddQuoteResponseDto
{
    statusCode:number
    message:string
    quote:Quotes
    constructor(statusCode:number,message:string,quotes:Quotes){
        this.statusCode=statusCode
        this.message=message
        this.quote=quotes
    }s
}