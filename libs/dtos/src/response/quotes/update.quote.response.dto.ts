import { Quotes } from "@cnbc-monorepo/entity"

export class UpdateQuoteResponseDto{
    statusCode:number
    message:string
    quote:Quotes
    constructor(statusCode:number,message:string,quote:Quotes){
        this.statusCode=statusCode
        this.message=message
        this.quote=quote
    }
}