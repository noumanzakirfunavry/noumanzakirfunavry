import { Categories } from "@cnbc-monorepo/entity"

export class UpdateCategoriesResponseDto{
    statusCode:number
    message:string
    response:{category:any}
    constructor(statusCode:number,message:string,category:any){
        this.statusCode=statusCode
        this.message=message
        this.response={category}
    }
}