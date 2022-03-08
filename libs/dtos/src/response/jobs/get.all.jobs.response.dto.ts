import { Jobs } from "@cnbc-monorepo/entity"

export class GetAllJobResponseDto{
    
    statusCode:number
    message:string
    response:{jobs:Jobs[]}
    constructor(statusCode:number,message:string,jobs:Jobs[]){
        this.statusCode=statusCode
        this.message=message
        this.response={jobs}
    }
}