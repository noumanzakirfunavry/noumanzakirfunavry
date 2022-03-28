
import { CreateAttachmentRequestDto, DeleteAlexaAudioRequestDto, GetAllEpisodesRequestDto, GenericResponseDto, UpdateAttachmentRequestDto } from '@cnbc-monorepo/dtos';
import { Attachments } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Blob } from 'buffer'

@Injectable()
export class AttachmentsService {
    constructor(
        @Inject('ATTACHMENTS_REPOSITORY')
        private attachmentsRepository: typeof Attachments,
        private helperService: Helper
    ) { }

    async createAttachment(file, body: CreateAttachmentRequestDto, userId): Promise<GenericResponseDto> {
        try {
            const attachment_obj = this.helperService.attachmentObj(body, userId, file[0].filename)
            const response = await this.attachmentCreationQuery(attachment_obj)
            if (response) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Attachment added successfully",
                    response
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
            console.log("🚀 ~ file: attachments.service.ts ~ line 37 ~ AttachmentsService ~ createAttachment ~ err", err)
            throw err
        }
    }

    async getAllAttachments(query: GetAllEpisodesRequestDto): Promise<GenericResponseDto> {
        try {
            const response = await this.getAllAttachmentsQuery(query.limit, query.pageNo)
            return new GenericResponseDto(
                HttpStatus.OK,
                "Attachments fetched successfully",
                {
                    attachments: response.rows,
                    totalCount: response.count
                }
            )
        }
        catch (err) {
            console.log("🚀 ~ file: attachments.service.ts ~ line 54 ~ AttachmentsService ~ getAllAttachments ~ err", err)
            throw err
        }
    }

    private async getAllAttachmentsQuery(limit: number, pageNo: number) {
        return await this.attachmentsRepository.findAndCountAll(
            {
                limit: parseInt(limit.toString()),
                offset: this.helperService.offsetCalculator(pageNo, limit)
            }
        );
    }

    async updateAttachment(id: number, body: UpdateAttachmentRequestDto): Promise<GenericResponseDto> {
        try {
            const attachment_exists = await this.attachmentExistsQuery(id)
            if (attachment_exists) {
                const response = await this.updateAttachmentQuery(body, id)
                if (response) {
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
            console.log("🚀 ~ file: attachments.service.ts ~ line 93 ~ AttachmentsService ~ updateAttachment ~ err", err)
            throw err
        }
    }

    async deleteAttachments(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        let attachment_exists;
        let response;
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                for (let i = 0; i < query.id.length; i++) {
                    attachment_exists = await this.attachmentExistsQuery(query.id[i])
                    if (attachment_exists) {
                        response = await this.deleteAttachmentsQuery(query.id[i], transactionHost)
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
            console.log("🚀 ~ file: attachments.service.ts ~ line 129 ~ AttachmentsService ~ deleteAttachments ~ err", err)
            throw err
        }
    }
    async getAttachmentById(id: number): Promise<GenericResponseDto> {
        try {
            const attachment_exists = await this.attachmentExistsQuery(id)
            if (attachment_exists) {
                // const file = fs.readFileSync(attachment_exists.path);
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Attachment fetched successfully",
                    {
                        attachment: attachment_exists
                    }
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
            console.log("🚀 ~ file: attachments.service.ts ~ line 102 ~ AttachmentsService ~ getAttachmentById ~ err", err)
            throw err
        }
    }


    private async deleteAttachmentsQuery(id, transactionHost) {
        return await this.attachmentsRepository.destroy({
            where: {
                id: id
            },
            transaction: transactionHost.transaction
        })
    }

    private async updateAttachmentQuery(body: UpdateAttachmentRequestDto, id: number) {
        return await this.attachmentsRepository.update(body, {
            where: {
                id: id
            }
        });
    }

    private async attachmentExistsQuery(id: number) {
        return await this.attachmentsRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async attachmentCreationQuery(attachment_obj: any) {
        return await this.attachmentsRepository.create(attachment_obj);
    }
}
