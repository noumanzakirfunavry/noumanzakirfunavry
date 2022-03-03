import { Tags } from "@cnbc-monorepo/entity"

export class AddTagResponseDto{
    statusCode:number
    message:string
    response:Tags
    constructor(statusCode:number,message:string,tag:Tags){
        this.statusCode=statusCode
        this.message=message
        this.response=tag
    }
}