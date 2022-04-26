import { Episodes, Presenters, ProgramsSchedule } from "@cnbc-monorepo/entity"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProgramRequestDto {

	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsNotEmpty()
	description: string

	@IsNumber()
	orders: number

	firstAiredOn: Date

	@IsString()
	@IsNotEmpty()
	producedBy: string

	@IsBoolean()
	isActive: boolean

	@IsNumber()
	publisherId: number

	@IsNumber()
	seoDetailId: number

	@IsNumber()
	thumbnailId: number

	@IsNumber()
	promoId: number

	episodes: Episodes[]

	presenters: Presenters[]

	programSchedule: ProgramsSchedule[]

}