import { ExclusiveVideos } from "@cnbc-monorepo/entity"

export class GetAllExclusiveVideosResponseDto {
    statusCode: number
    message: string
    response = {
        exclusiveVideos: ExclusiveVideos[""],
        totalCount: 0
    }
    constructor(statusCode: number, message: string, exclusiveVideos: any, totalCount: number) {
        this.statusCode = statusCode
        this.message = message
        this.response.exclusiveVideos = exclusiveVideos,
            this.response.totalCount = totalCount
    }
}