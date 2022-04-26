import { AttachmentTypes } from "@cnbc-monorepo/enums";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllAttachmentsRequestDto extends PaginatedRequestDto {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	title?: string

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string

	@IsOptional()
	@IsEnum(AttachmentTypes)
	attachmentType?: AttachmentTypes
}