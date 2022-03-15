import { LiveStreamLinks } from "@cnbc-monorepo/entity"

export class GetLiveStreamLinkByIdResponseDto{
    statusCode: number
    message: string
    response = {
        liveStreamLink : LiveStreamLinks,
    }
    constructor(statusCode: number, message: string, liveStreamLinks: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.liveStreamLink = liveStreamLinks
    }
}