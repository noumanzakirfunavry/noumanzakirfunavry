import { News } from "@cnbc-monorepo/entity"

export class GetNewsByIdResponseDto{
    statusCode: number
    message: string
    response = {
        news : News
    }
    constructor(statusCode: number, message: string, news: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.news = news
    }
}