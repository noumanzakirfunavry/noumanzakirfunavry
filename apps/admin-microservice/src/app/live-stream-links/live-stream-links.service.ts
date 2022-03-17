import { CreateLiveStreamLinksRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllLiveStreamLinksRequestDto, GetAllLiveStreamLinksResponseDto, GetLiveStreamLinkByIdResponseDto } from '@cnbc-monorepo/dtos';
import { LiveStreamLinks } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class LiveStreamLinksService {

    constructor(
        @Inject('LIVE_STREAM_LINKS_REPOSITORY')
        private liveStreamLinksRepository: typeof LiveStreamLinks,
        private helperService: Helper
    ) { }

    async addLiveStreamLinks(body: CreateLiveStreamLinksRequestDto, userId: number): Promise<GenericResponseDto> {
        try {

            const addLink = await this.addLiveLinkQuery(body, userId)
            if (addLink) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Live stream link added successfully"
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
            console.log("🚀 ~ file: live-stream-links.service.ts ~ line 13 ~ LiveStreamLinksService ~ addLiveStreamLinks ~ err", err)
            throw err
        }
    }

    async updateLiveStreamLinks(body: CreateLiveStreamLinksRequestDto, id: number): Promise<GenericResponseDto> {
        try {
            const link_exists = await this.linkExists(id)
            if (link_exists) {
                const update_link = await this.updateLinkQuery(body, id)
                if (update_link) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Updated successfully"
                    )
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                    )
                }
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: live-stream-links.service.ts ~ line 45 ~ LiveStreamLinksService ~ updateLiveStreamLinks ~ err", err)
            throw err
        }
    }

    async getAllLiveStreamLinks(query: GetAllLiveStreamLinksRequestDto): Promise<GetAllLiveStreamLinksResponseDto> {
        const liveStreamArray = await this.liveStreamArrayQuery(query)
        if (liveStreamArray) {
            return new GetAllLiveStreamLinksResponseDto(
                HttpStatus.OK,
                "Live stream links fetched successfully",
                liveStreamArray.rows,
                liveStreamArray.count
            )
        }
        else {
            throw new CustomException(
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
            )
        }
    }
    private async liveStreamArrayQuery(query: GetAllLiveStreamLinksRequestDto) {
        return await this.liveStreamLinksRepository.findAndCountAll({
            where: {
                ...(query.search && {
                    title: {
                        [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
                    }
                }),
                ...(query.isActive && {
                    isActive: JSON.parse(query.isActive.toString())
                })
            },
            limit: parseInt(query.limit.toString()),
            offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
        });
    }

    async getLiveStreamLinkById(id): Promise<GetLiveStreamLinkByIdResponseDto> {
        try {
            const link_exists = await this.linkExists(id)
            if (link_exists) {
                return new GetLiveStreamLinkByIdResponseDto(
                    HttpStatus.OK,
                    "Link fetched successfully",
                    link_exists
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: live-stream-links.service.ts ~ line 106 ~ LiveStreamLinksService ~ getLiveStreamLinkById ~ err", err)
            throw err
        }
    }
    async deleteLiveStreamLinkById(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        let link_exists;
        let response;
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                for (let i = 0; i < query.id.length; i++) {
                    link_exists = await this.linkExists(query.id[i])
                    if (link_exists) {
                        response = await this.deleteLinksQuery(query.id[i], transactionHost)
                        if (!response) {
                            throw new CustomException(
                                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                            )
                        }
                    }
                    else {
                        throw new CustomException(
                            Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                            Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                        )
                    }
                }
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Deleted successfully"
                )
            })
        }
        catch (err) {
            console.log("🚀 ~ file: live-stream-links.service.ts ~ line 141 ~ LiveStreamLinksService ~ deleteLiveStreamLinkById ~ err", err)
            throw err
        }

    }
    private async deleteLinksQuery(id, transactionHost) {
        return await this.liveStreamLinksRepository.destroy({
            where: {
                id: id
            },
            transaction: transactionHost.transaction
        })
    }
    private async updateLinkQuery(body: CreateLiveStreamLinksRequestDto, id: number) {
        return await this.liveStreamLinksRepository.update(body, {
            where: {
                id: id
            }
        });
    }

    private async linkExists(id: number) {
        return await this.liveStreamLinksRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async addLiveLinkQuery(body: CreateLiveStreamLinksRequestDto, userId: number) {
        return await this.liveStreamLinksRepository.create(this.helperService.liveStreamObj(body, userId));
    }
}
