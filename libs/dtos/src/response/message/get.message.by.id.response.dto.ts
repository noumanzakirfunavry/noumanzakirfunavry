import { Message } from "@cnbc-monorepo/entity"


export class GetMessageByIdResponseDto{
    statusCode: number
    message: string
    response = {
        message : Message
    }
    constructor(statusCode: number, message: string, messages: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.message = messages
    }
}