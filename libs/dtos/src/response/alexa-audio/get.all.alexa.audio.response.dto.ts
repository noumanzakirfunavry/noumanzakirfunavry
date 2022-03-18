import { AlexaAudio } from "@cnbc-monorepo/entity"

export class GetAllAlexaAudioByIdResponseDto{
    statusCode: number
    message: string
    response = {
        alexaAudios : AlexaAudio[""],
        totalCount : 0
    }
    constructor(statusCode: number, message: string, alexaAudio: any,totalCount : number) {
        this.statusCode = statusCode
        this.message = message
        this.response.alexaAudios = alexaAudio,
        this.response.totalCount = totalCount
    }
}