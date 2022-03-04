import { Quotes } from "@cnbc-monorepo/entity"

export class GetAllQuotesResponseDto
{
    statusCode:number
    message:string
    quotes:Quotes[]
    constructor(statusCode:number,message:string,quotes:Quotes[]){
        this.statusCode=statusCode
        this.message=message
        this.quotes=quotes
    }
}