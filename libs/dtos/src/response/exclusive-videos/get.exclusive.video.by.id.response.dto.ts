import { ExclusiveVideos } from "@cnbc-monorepo/entity"

export class GetExclusiveVideoByIdResponseDto {
    statusCode: number
    message: string
    response = {
        exclusiveVideo: ExclusiveVideos
    }
    constructor(statusCode: number, message: string, exclusiveVideo: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.exclusiveVideo = exclusiveVideo
    }
}