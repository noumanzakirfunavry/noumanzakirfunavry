import { AlexaAudio } from "@cnbc-monorepo/entity"

export class GetAlexaAudioByIdResponseDto{
    statusCode: number
    message: string
    response = {
        alexaAudio : AlexaAudio
    }
    constructor(statusCode: number, message: string, alexaAudio: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.alexaAudio = alexaAudio
    }
}