import { Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateAttachmentRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, UpdateAttachmentRequestDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Param, Post, Put, Query, Req, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import {FileFieldsInterceptor} from '@nestjs/platform-express'

@Controller('admin/api/admin/attachments')
export class AttachmentsController {
    constructor(
        private attachmentsService : AttachmentsService
    ){}

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @UseInterceptors(FileFieldsInterceptor([
        {name : 'file'}
    ]))
    @Post()
    async createAttachment(@UploadedFiles() files: {file?},@Body() body : CreateAttachmentRequestDto,@Req() req) : Promise<GenericResponseDto>{
       return await this.attachmentsService.createAttachment(files.file,body,req.user.data.id);
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Put(":id")
    async updateAttachment(@Param("id") id : number, @Body() body : UpdateAttachmentRequestDto) : Promise<GenericResponseDto>{
       return await this.attachmentsService.updateAttachment(id,body);
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Delete()
    async deleteAttachments(@Query() query : DeleteAlexaAudioRequestDto) : Promise<GenericResponseDto>{
       return await this.attachmentsService.deleteAttachments(query);
    }
}
