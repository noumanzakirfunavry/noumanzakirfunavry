import { Rights } from "@cnbc-monorepo/entity"

export class RightsResponseDto
{
    statusCode:number
    message:string
    response = {
        rights : Rights[""]
    }
    constructor(statusCode:number,message:string,rights:Rights[]){
        this.statusCode=statusCode
        this.message=message
        this.response.rights=rights
    }s
}