import { QuickLinks } from "@cnbc-monorepo/entity"

export class GetQuickLinkByIdResponseDto{
    statusCode:number
    message:string
    quickLinks:QuickLinks
    constructor(statusCode:number,message:string,quick:QuickLinks){
        this.statusCode=statusCode
        this.message=message
        this.quickLinks=quick
    }
}