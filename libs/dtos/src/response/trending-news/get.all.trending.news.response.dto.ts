import { TrendingNews } from "@cnbc-monorepo/entity"

export class GetAllTrendingNewsResponseDto{
    statusCode: number
    message: string
    response = {
        trendingNews : TrendingNews[""]
    }
    constructor(statusCode: number, message: string, trendingNews: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.trendingNews = trendingNews
    }
}