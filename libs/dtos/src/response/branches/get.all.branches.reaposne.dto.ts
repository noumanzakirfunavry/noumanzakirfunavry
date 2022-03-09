import { Branches, Jobs } from "@cnbc-monorepo/entity"

export class GetAllBranchResponseDto{
    
    statusCode:number
    message:string
    response:{branches:Branches[]}
    constructor(statusCode:number,message:string,branches:Branches[]){
        this.statusCode=statusCode
        this.message=message
        this.response={branches}
    }
}