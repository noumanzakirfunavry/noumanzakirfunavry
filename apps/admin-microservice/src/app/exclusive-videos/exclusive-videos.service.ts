import { CreateExclusiveVideosRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllExclusiveVideos, GetAllExclusiveVideosResponseDto, GetExclusiveVideoByIdResponseDto } from '@cnbc-monorepo/dtos';
import { ExclusiveVideos } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ExclusiveVideosService {
    constructor(
        private helperService: Helper,
        @Inject('EXCLUSIVE_VIDEOS_REPOSITORY')
        private exclusiveVideoRepository: typeof ExclusiveVideos,
    ) { }
    async createExclusiveVideo(body: any): Promise<GenericResponseDto> {
        try {
            const create_exclusive = await this.createExclusiveVideoQuery(body)
            if (create_exclusive) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Created successfully"
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
            console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 17 ~ ExclusiveVideosService ~ createExclusiveVideo ~ err", err)
            throw err
        }
    }
    async updateExclusiveVideo(body: CreateExclusiveVideosRequestDto, id: number): Promise<GenericResponseDto> {
        try {
            const exclusive_exists = await this.videoExists(id)
            if (exclusive_exists) {
                const update_exclusive = await this.updateExclusiveQuery(body, id)
                if (update_exclusive) {
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
            console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 40 ~ ExclusiveVideosService ~ updateMessage ~ err", err)
            throw err
        }
    }
    async getAllExclusiveVideos(query: GetAllExclusiveVideos): Promise<GetAllExclusiveVideosResponseDto> {
        try {
            const results_array = await this.allVideosQuery(query)
            return new GetAllExclusiveVideosResponseDto(
                HttpStatus.OK,
                "Exclusive videos retrieved successfully",
                results_array.rows,
                results_array.count
            )
        }
        catch (err) {
            console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 70 ~ ExclusiveVideosService ~ getAllExclusiveVideos ~ err", err)
            throw err
        }
    }

    async getExclusiveVideoById(id: number): Promise<GetExclusiveVideoByIdResponseDto> {
        try {
            const response = await this.videoExists(id)
            if (response) {
                return new GetExclusiveVideoByIdResponseDto(
                    HttpStatus.OK,
                    "Exclusive video fetched successfully",
                    response
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
            console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 86 ~ ExclusiveVideosService ~ getExclusiveVideoById ~ err", err)
            throw err
        }
    }
    async deleteExclusiveVideoById(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                let video_exists;
                let delete_video;
                for (let i = 0; i < query.id.length; i++) {
                    video_exists = await this.videoExists(query.id[i])
                    if (video_exists) {
                        delete_video = await this.deleteVideoQuery(delete_video, query, i, transactionHost);
                        if (!delete_video) {
                            throw new CustomException(
                                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
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
            console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 112 ~ ExclusiveVideosService ~ deleteExclusiveVideoById ~ err", err)
            throw err
        }
    }

    private async deleteVideoQuery(delete_video: any, query: DeleteAlexaAudioRequestDto, i: number, transactionHost) {
        delete_video = await this.exclusiveVideoRepository.destroy({
            where: {
                id: query.id[i]
            },
            transaction: transactionHost.transaction
        });
        return delete_video;
    }

    private async allVideosQuery(query: GetAllExclusiveVideos) {
        return await this.exclusiveVideoRepository.findAndCountAll({
            where: {},
            limit: parseInt(query.limit.toString()),
            offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
        });
    }

    private async videoExists(id: number) {
        return await this.exclusiveVideoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async updateExclusiveQuery(body: CreateExclusiveVideosRequestDto, id: number) {
        return await this.exclusiveVideoRepository.update(body,
            {
                where: {
                    id: id
                }
            });
    }

    private async createExclusiveVideoQuery(body: any) {
        return await this.exclusiveVideoRepository.create(body);
    }
}