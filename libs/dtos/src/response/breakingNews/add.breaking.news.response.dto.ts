import { BreakingNews } from "@cnbc-monorepo/entity"

export class AddBreakingNewsResponseDto{
    statusCode:number
    message:string
    breakingNews:BreakingNews
    constructor(statusCode:number,message:string,breakingNews:BreakingNews){
        this.statusCode=statusCode
        this.message=message
        this.breakingNews=breakingNews
    }
}