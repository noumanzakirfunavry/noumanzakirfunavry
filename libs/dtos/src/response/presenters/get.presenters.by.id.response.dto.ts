import { Presenters } from "@cnbc-monorepo/entity"

export class GetPresentersByIdResponseDto
{
    statusCode:number
    message:string
    response = {
        presenter : Presenters
    }
    constructor(statusCode:number,message:string,presenter:any){
        this.statusCode=statusCode
        this.message=message
        this.response.presenter = presenter
    }
}