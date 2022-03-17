import { FeaturedNews } from "@cnbc-monorepo/entity"

export class GetAllFeaturedNewsResponseDto{
    statusCode: number
    message: string
    response = {
        featuredNews : FeaturedNews[""]
    }
    constructor(statusCode: number, message: string, featuredNews: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.featuredNews = featuredNews
    }
}