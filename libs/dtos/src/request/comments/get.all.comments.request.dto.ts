import { EntityTypesComments } from '@cnbc-monorepo/enums'
import { IsEnum } from 'class-validator'
import { PaginatedRequestDto } from '../pagination.request.dto'

export class GetAllCommentsRequestDto extends PaginatedRequestDto {
	@IsEnum(EntityTypesComments)
	entityType?: EntityTypesComments
}