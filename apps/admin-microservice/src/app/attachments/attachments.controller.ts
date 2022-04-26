import { Roles } from '@cnbc-monorepo/auth-module';
import {
	CreateAttachmentRequestDto,
	DeleteAlexaAudioRequestDto,
	GenericResponseDto,
	GetAllAttachmentsRequestDto, UpdateAttachmentRequestDto
} from '@cnbc-monorepo/dtos';
import { RoleTypes } from '@cnbc-monorepo/enums';
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
	Req,
	UploadedFiles,
	UseInterceptors
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AttachmentsService } from './attachments.service';

@Controller('admin/api/admin/attachments')
export class AttachmentsController {
  constructor(private attachmentsService: AttachmentsService) {}

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file' }]))
  @Post()
  async createAttachment(
    @UploadedFiles() files: { file? },
    @Body() body: CreateAttachmentRequestDto,
    @Req() req
  ): Promise<GenericResponseDto> {
    return await this.attachmentsService.createAttachment(
      files.file,
      body,
      req.user.data.id
    );
  }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @Put(':id')
  async updateAttachment(
    @Param('id') id: number,
    @Body() body: UpdateAttachmentRequestDto
  ): Promise<GenericResponseDto> {
    return await this.attachmentsService.updateAttachment(id, body);
  }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @Get('getAll')
  async getAllAttachments(
    @Query() query: GetAllAttachmentsRequestDto
  ): Promise<GenericResponseDto> {
    return await this.attachmentsService.getAllAttachments(query);
  }

  @Delete()
  async deleteAttachments(
    @Query() query: DeleteAlexaAudioRequestDto
  ): Promise<GenericResponseDto> {
    return await this.attachmentsService.deleteAttachments(query);
  }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @Get(':id')
  async getAttachmentById(
    @Param('id') id: number
  ): Promise<GenericResponseDto> {
    return await this.attachmentsService.getAttachmentById(id);
  }
}
