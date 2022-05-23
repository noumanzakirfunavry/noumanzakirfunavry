import { EntityTypesComments } from '@cnbc-monorepo/enums'
import { IsString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator'

export class AddCommentRequestDto {
	@IsEnum(EntityTypesComments)
	entityType: EntityTypesComments

	@IsNumber()
	entityId: number

	@IsString()
	@IsNotEmpty()
	comment: string
}