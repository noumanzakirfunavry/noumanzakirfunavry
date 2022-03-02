import { Presenters } from "@cnbc-monorepo/entity"

export class GetAllPresentersResponseDto
{
    statusCode:number
    message:string
    response = {
        presenters : Presenters[""],
        totalCount : 0
    }
    constructor(statusCode:number,message:string,presenter:any,totalCount : number){
        this.statusCode=statusCode
        this.message=message
        this.response.presenters = presenter
        this.response.totalCount = totalCount
    }
}