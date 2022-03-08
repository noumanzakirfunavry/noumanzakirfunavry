import { Categories } from "@cnbc-monorepo/entity"

export class GetAllCategoriesResponseDto{
    statusCode:number
    message:string
    response:{categories:Categories[]}
    constructor(statusCode:number,message:string,categories:Categories[]){
        this.statusCode=statusCode
        this.message=message
        this.response={categories}
    }
}