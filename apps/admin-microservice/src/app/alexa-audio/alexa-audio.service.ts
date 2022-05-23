import { CreateAlexaAudioRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAlexaAudioByIdResponseDto, GetAllAlexaAudioByIdResponseDto, GetAllAlexaAudioRequestDto } from '@cnbc-monorepo/dtos';
import { AlexaAudio } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class AlexaAudioService {
    constructor(
        @Inject('ALEXA_REPOSITORY')
        private alexaRepository: typeof AlexaAudio,
        private helperService: Helper
    ) { }

    async audioExists(id) {
        return await this.alexaRepository.findOne({
            where: {
                id: id
            }
        })
    }
    async updateAlexaAudio(body: CreateAlexaAudioRequestDto, id: number, req) {
        try {
            const audio_exists = await this.audioExists(id)
            if (audio_exists) {
                const update_record = await this.alexaRepository.update(body,
                    {
                        where: {
                            id: id
                        }
                    })
                if (update_record) {
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
            console.log("🚀 ~ file: alexa-audio.service.ts ~ line 18 ~ AlexaAudioService ~ updateAlexaAudio ~ err", err)
            throw err
        }
    }
    async addAlexaAudio(body: any, success_Message: string): Promise<GenericResponseDto> {
        try {
            const response = await this.alexaRepository.create(body)
            if (response) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    success_Message
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
            console.log("🚀 ~ file: alexa-audio.service.ts ~ line 17 ~ AlexaAudioService ~ addAlexaAudio ~ err", err)
            throw err
        }
    }
    async getAlexaAudioById(id): Promise<GetAlexaAudioByIdResponseDto> {
        const audio_exists = await this.audioExists(id)
        if (audio_exists) {
            return new GetAlexaAudioByIdResponseDto(
                HttpStatus.OK,
                "Fetched successfully",
                audio_exists
            )
        }
        else {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
    }
    async getAllAlexaAudio(body: GetAllAlexaAudioRequestDto): Promise<GetAllAlexaAudioByIdResponseDto> {
        try {
            const response = await this.alexaRepository.findAndCountAll({
                where: {
                    title: {
                        [Op.like]: `%${body.search ? body.search : ""}%`
                    }
                },
                limit: parseInt(body.limit.toString()),
                offset: this.helperService.offsetCalculator(body.pageNo, body.limit)
            })
            if (response) {
                return new GetAllAlexaAudioByIdResponseDto(
                    HttpStatus.OK,
                    "Alexa audios fetched successfully",
                    response.rows,
                    response.count
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
            console.log("🚀 ~ file: alexa-audio.service.ts ~ line 97 ~ AlexaAudioService ~ getAllAlexaAudio ~ err", err)
            throw err
        }
    }
    async deleteAlexaAudio(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        try {
            let response;
            let audio_exists;
            for (let i = 0; i < query.id.length; i++) {
                audio_exists = await this.audioExists(query.id[i])
                if (audio_exists) {
                    response = await this.alexaRepository.destroy({
                        where: {
                            id: query.id[i]
                        }
                    })
                    if (!response) {
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
        }
        catch (err) {
            console.log("🚀 ~ file: alexa-audio.service.ts ~ line 131 ~ AlexaAudioService ~ deleteAlexaAudio ~ err", err)
            throw err
        }
    }
}
