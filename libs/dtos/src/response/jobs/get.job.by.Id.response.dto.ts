import { Jobs } from "@cnbc-monorepo/entity"

export class GetJobByIdResponseDto{

    statusCode:number
    message:string
    response:{job:Jobs}
    constructor(statusCode:number,message:string,job:Jobs){
        this.statusCode=statusCode
        this.message=message
        this.response={job}
    }
}