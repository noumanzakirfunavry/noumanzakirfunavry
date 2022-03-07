import { Branches, Jobs } from "@cnbc-monorepo/entity"

export class GetBranchByIdResponseDto{

    statusCode:number
    message:string
    response:{branch:Branches}
    constructor(statusCode:number,message:string,branch:Branches){
        this.statusCode=statusCode
        this.message=message
        this.response={branch}
    }
}