import { Type } from "class-transformer"
import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator"
import { CreateSeoRequestDto } from "../seo/create.seo.request.dto"

export class CreateProgramRequestDto {

	@IsNumber()
	@IsOptional()
	id : number

	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	title: string

	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	description: string

	@IsNumber()
	@IsNotEmpty()
	orders: number

	@IsNotEmpty()
	@IsDateString()
	firstAiredOn: Date

	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	producedBy: string

	@IsBoolean()
	@IsNotEmpty()
	isActive: boolean

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => CreateSeoRequestDto)
	seoDetails: CreateSeoRequestDto

	@IsNumber()
	@IsOptional()
	thumbnailId: number

	@IsNumber()
	@IsOptional()
	promoId: number
}