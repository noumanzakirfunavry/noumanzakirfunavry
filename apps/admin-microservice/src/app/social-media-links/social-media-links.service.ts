import { DeleteSocialMediaLinkById, GenericResponseDto, GetAllSocialMediaLinksRequestDto, GetAllSocialMediaLinksResponseDto, GetSocialMediaLinkByIdRequestDto, GetSocialMediaLinkByIdResponseDto } from '@cnbc-monorepo/dtos';
import { SocialMediaLink } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { MailService } from '@cnbc-monorepo/mail';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class SocialMediaLinksService {
    constructor(
        @Inject('SOCIAL_MEDIA_LINK_REPOSITORY')
        private socialMediaLinksRepository: typeof SocialMediaLink,
        private helperService: Helper
    ) { }

    async getAllSocialMediaLinks(query: GetAllSocialMediaLinksRequestDto) {
        try {
            const offset = this.helperService.offsetCalculator(query.pageNo, query.limit)
            const response = await this.socialMediaLinksRepository.findAndCountAll({
                where: {
                    ...(query.search && {
                        platform: {
                            [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
                        }
                    }),
                    ...(query.isActive && {
                        isActive: JSON.parse(query.isActive.toString())
                    })
                },
                offset: offset,
                limit: parseInt(query.limit.toString())
            })
            if (response) {
                return new GetAllSocialMediaLinksResponseDto(
                    HttpStatus.OK,
                    "Social media links fetched successfully",
                    response.rows,
                    response.count
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: social-media-links.service.ts ~ line 17 ~ SocialMediaLinksService ~ getAllSocialMediaLinks ~ err", err)
            throw err
        }
    }
    async getSocialMediaLinkById(id: number): Promise<GetSocialMediaLinkByIdResponseDto> {
        try {
            const link_exists = await this.socialMediaLinkExistance(id)
            if (link_exists) {
                return new GetSocialMediaLinkByIdResponseDto(
                    HttpStatus.OK,
                    "Link fetched successfully",
                    link_exists
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND].message,
                    Exceptions[ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: social-media-links.service.ts ~ line 55 ~ SocialMediaLinksService ~ getSocialMediaLinkById ~ err", err)
            throw err
        }
    }
    async socialMediaLinkExistance(id) {
        return await this.socialMediaLinksRepository.findOne({
            where: {
                id: id
            }
        })
    }
    async deleteSocialMediaLinkById(query: DeleteSocialMediaLinkById): Promise<GenericResponseDto> {
        try {
            let link_exists;
            let delete_link;
            for (let i = 0; i < query.id.length; i++) {
                link_exists = await this.socialMediaLinkExistance(query.id)
                if (link_exists) {
                    delete_link = await this.socialMediaLinksRepository.destroy({
                        where: {
                            id: query.id[i]
                        }
                    })
                    if (!delete_link) {
                        throw new CustomException(
                            Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                            Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                        )
                    }
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND].message,
                        Exceptions[ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND].status
                    )
                }
            }
            return new GenericResponseDto(
                HttpStatus.OK,
                "Entries deleted successfully"
            )
        }
        catch (err) {
            console.log("🚀 ~ file: social-media-links.service.ts ~ line 84 ~ SocialMediaLinksService ~ deleteSocialMediaLinkById ~ err", err)
            throw err
        }

    }
    async createSocialMediaLink(body: any, id: number): Promise<GenericResponseDto> {
        try {
            const new_post = {
                ...body,
                "publishedBy": id
            }
            const add_link = this.socialMediaLinksRepository.create(new_post)
            if (add_link) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Social Media link created successfully"
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: social-media-links.service.ts ~ line 121 ~ SocialMediaLinksService ~ createSocialMediaLink ~ err", err)
            throw err
        }
    }
    async updateSocialMediaLink(body: any, postId: number): Promise<GenericResponseDto> {
        try {
            const link_exists = await this.socialMediaLinkExistance(postId)
            if (link_exists) {
                const add_link = this.socialMediaLinksRepository.update(body, {
                    where: {
                        id: postId
                    }
                })
                if (add_link) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Social Media link updated successfully"
                    )
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                        Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                    )
                }
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND].message,
                    Exceptions[ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: social-media-links.service.ts ~ line 121 ~ SocialMediaLinksService ~ createSocialMediaLink ~ err", err)
            throw err
        }
    }

}
