import { Message } from "@cnbc-monorepo/entity"


export class GetAllMessagesResponseDto{
    statusCode: number
    message: string
    response = {
        messages : Message[""],
        totalCount: 0
    }
    constructor(statusCode: number, message: string, messages: any, totalCount : number) {
        this.statusCode = statusCode
        this.message = message
        this.response.messages = messages
        this.response.totalCount = totalCount
    }
}