import { AttachmentTypes, DailymotionUploadStatus } from "@cnbc-monorepo/enums";
import { IsBooleanString, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

export class CreateAttachmentRequestDto {
	@IsNotEmpty()
	@IsString()
	title: string

	@IsNotEmpty()
	@IsString()
	description: string

	@IsNotEmpty()
	@IsEnum(AttachmentTypes)
	attachmentType: string

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsString()
	@IsNotEmpty()
	tags: string

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsString()
	@IsNotEmpty()
	channel: string

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsBooleanString()
	@IsNotEmpty()
	toBePublished: boolean

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsBooleanString()
	@IsNotEmpty()
	toBePrivate: boolean

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsBooleanString()
	@IsNotEmpty()
	isCreatedForKids: boolean

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsOptional()
	@IsNotEmpty()
	@IsEnum(DailymotionUploadStatus)
	dailymotionUploadStatus: DailymotionUploadStatus
}
