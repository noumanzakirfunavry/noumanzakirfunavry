import { EntityTypesComments } from '@cnbc-monorepo/enums'
import { IsEnum, IsNumberString } from 'class-validator'
import { PaginatedRequestDto } from '../pagination.request.dto'

export class GetAllCommentsRequestDto extends PaginatedRequestDto {
	@IsEnum(EntityTypesComments)
	entityType: EntityTypesComments

	@IsNumberString()
	entityId: number
}