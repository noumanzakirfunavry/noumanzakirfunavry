import { AttachmentTypes, DailymotionUploadStatus } from "@cnbc-monorepo/enums";
import { IsBoolean, IsBooleanString, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

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
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	tags: string

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	channel: string

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsOptional()
	@IsBooleanString()
	@IsNotEmpty()
	toBePublished: boolean

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsOptional()
	@IsBooleanString()
	@IsNotEmpty()
	toBePrivate: boolean

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsOptional()
	@IsBooleanString()
	@IsNotEmpty()
	isCreatedForKids: boolean

	@ValidateIf(o => o.attachmentType === AttachmentTypes.VIDEO)
	@IsOptional()
	@IsNotEmpty()
	@IsEnum(DailymotionUploadStatus)
	dailymotionUploadStatus: DailymotionUploadStatus
}
