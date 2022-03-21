import { CreateAttachmentRequestDto, GenericResponseDto, UpdateAttachmentRequestDto } from '@cnbc-monorepo/dtos';
import { Attachments } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AttachmentsService {
    constructor(
        @Inject('ATTACHMENTS_REPOSITORY')
        private attachmentsRepository: typeof Attachments,
        private helperService: Helper
    ) { }

    async createAttachment(file, body: CreateAttachmentRequestDto, userId): Promise<GenericResponseDto> {
        try {
            const attachment_obj = this.helperService.attachmentObj(body, userId, file[0].path)
            const response = await this.attachmentCreationQuery(attachment_obj)
            if (response) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Attachment added successfully"
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
            console.log("🚀 ~ file: attachments.service.ts ~ line 19 ~ AttachmentsService ~ createAttachment ~ err", err)
            throw err
        }
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
            console.log("🚀 ~ file: attachments.service.ts ~ line 43 ~ AttachmentsService ~ updateAttachment ~ err", err)
            throw err
        }
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
