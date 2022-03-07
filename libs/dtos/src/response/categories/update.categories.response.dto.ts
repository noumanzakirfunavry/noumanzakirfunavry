import { Categories } from "@cnbc-monorepo/entity"

export class UpdateCategoriesResponseDto{
    statusCode:number
    message:string
    response:{category:Categories}
    constructor(statusCode:number,message:string,category:Categories){
        this.statusCode=statusCode
        this.message=message
        this.response={category}
    }
}