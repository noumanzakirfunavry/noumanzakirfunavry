import { SocialMediaLink } from "@cnbc-monorepo/entity"

export class GetAllSocialMediaLinksResponseDto {
    statusCode: number
    message: string
    response = {
        socialMediaLinks: SocialMediaLink[""],
        totalCount : 0
    }
    constructor(statusCode: number, message: string, socialMediaLinks: SocialMediaLink[],total : number) {
        this.statusCode = statusCode
        this.message = message
        this.response.socialMediaLinks = socialMediaLinks
        this.response.totalCount = total
    }
}