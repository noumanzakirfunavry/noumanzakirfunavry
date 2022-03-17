import { BreakingNews } from "@cnbc-monorepo/entity"

export class UpdateBreakingNewsResponseDto{
    statusCode:number
    message:string
    response:{breakingNews:BreakingNews}
    constructor(statusCode:number,message:string,breakingNews:BreakingNews){
        this.statusCode=statusCode
        this.message=message
        this.response={breakingNews}
    }
}