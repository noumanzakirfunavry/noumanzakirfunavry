import { Tags } from "@cnbc-monorepo/entity"

export class GetTagsByIdResponseDto{
    statusCode:number
    message:string
    tags:Tags
    constructor(statusCode:number,message:string,tags:Tags){
        this.statusCode=statusCode
        this.message=message
        this.tags=tags
    }
}