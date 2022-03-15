import { LiveStreamLinks } from "@cnbc-monorepo/entity"

export class GetAllLiveStreamLinksResponseDto{
    statusCode: number
    message: string
    response = {
        liveStreamLinks : LiveStreamLinks[""],
        totalCount : 0
    }
    constructor(statusCode: number, message: string, liveStreamLinks: any,totalCount : number) {
        this.statusCode = statusCode
        this.message = message
        this.response.liveStreamLinks = liveStreamLinks,
        this.response.totalCount = totalCount
    }
}