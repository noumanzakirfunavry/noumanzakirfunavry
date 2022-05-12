import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class AddCommentRequestDto {
	@IsString()
	@IsNotEmpty()
	entityType: string

	@IsNumber()
	entityId: number

	@IsString()
	@IsNotEmpty()
	comment: string
}