import { QuickLinks } from "@cnbc-monorepo/entity"

export class AddQuickLinksResponseDto{
    statusCode:number
    message:string
    response:{quickLinks:QuickLinks}
    constructor(statusCode:number,message:string,quick:QuickLinks){
        this.statusCode=statusCode
        this.message=message
        this.response={quickLinks:quick}
    }
}