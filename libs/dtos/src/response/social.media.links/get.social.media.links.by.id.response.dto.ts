import { SocialMediaLink } from "@cnbc-monorepo/entity"

export class GetSocialMediaLinkByIdResponseDto{
    statusCode: number
    message: string
    response = {
        socialMediaLinks : SocialMediaLink
    }
    constructor(statusCode: number, message: string, socialMediaLinks: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.socialMediaLinks = socialMediaLinks
    }
}