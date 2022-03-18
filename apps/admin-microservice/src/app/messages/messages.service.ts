import { CreateMessageRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllMessagesRequestDto, GetAllMessagesResponseDto, GetMessageByIdResponseDto } from '@cnbc-monorepo/dtos';
import { Message } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class MessagesService {
    constructor(
        private helperService: Helper,
        @Inject('MESSAGE_REPOSITORY')
        private messageRepository: typeof Message,
    ) { }

    async createMessage(body: any): Promise<GenericResponseDto> {
        try {
            const message_created = await this.createMessageQuery(body)
            if (message_created) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Message created successfully"
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
            console.log("🚀 ~ file: messages.service.ts ~ line 19 ~ MessagesService ~ createMessage ~ err", err)
            throw err
        }
    }
    async updateMessage(body: any, id: number) {
        try {
            const message_exists = await this.messageExists(id)
            if (message_exists) {
                const update_message = await this.updateMessageQuery(body, id)
                if (update_message) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Update successfully"
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
            console.log("🚀 ~ file: messages.service.ts ~ line 41 ~ MessagesService ~ updateMessage ~ err", err)
            throw err
        }

    }
    async getAllMessages(query: GetAllMessagesRequestDto): Promise<GetAllMessagesResponseDto> {
        try {
            const message_array = await this.messageSearch(query)
            return new GetAllMessagesResponseDto(
                HttpStatus.OK,
                "Messages fetched successfully",
                message_array.rows,
                message_array.count
            )
        }
        catch (err) {
            console.log("🚀 ~ file: messages.service.ts ~ line 72 ~ MessagesService ~ getAllMessages ~ err", err)
            throw err
        }
    }

    async getMessageById(id: number): Promise<GetMessageByIdResponseDto> {
        try {
            const message_exists = await this.messageExists(id)
            if (message_exists) {
                return new GetMessageByIdResponseDto(
                    HttpStatus.OK,
                    "Message fetched successfully",
                    message_exists
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
            console.log("🚀 ~ file: messages.service.ts ~ line 89 ~ MessagesService ~ getMessageById ~ err", err)
            throw err
        }
    }
    async deleteMessageById(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                let message_exists;
                let delete_message;
                for (let i = 0; i < query.id.length; i++) {
                    message_exists = await this.messageExists(query.id[i])
                    if (message_exists) {
                        delete_message = await this.deleteMessageQuery(delete_message, query, i, transactionHost);
                        if (!delete_message) {
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
            console.log("🚀 ~ file: messages.service.ts ~ line 121 ~ MessagesService ~ deleteMessageById ~ err", err)
            throw err
        }
    }

    private async deleteMessageQuery(delete_message: any, query: DeleteAlexaAudioRequestDto, i: number, transactionHost) {
        delete_message = await this.messageRepository.destroy({
            where: {
                id: query.id[i]
            },
            transaction: transactionHost.transaction
        });
        return delete_message;
    }

    private async messageSearch(query: GetAllMessagesRequestDto) {
        return await this.messageRepository.findAndCountAll(
            {
                where: {
                    ...(query.search && {
                        subject: {
                            [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
                        }
                    })
                },
                limit: parseInt(query.limit.toString()),
                offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
            }
        );
    }

    private async updateMessageQuery(body: any, id: number) {
        const response = await this.messageRepository.update(body,
            {
                where: {
                    id: id
                }
            });
        return response[0] == 0 ? true : response
    }

    private async messageExists(id: number) {
        return await this.messageRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async createMessageQuery(body: any) {
        return await this.messageRepository.create(body);
    }
}
