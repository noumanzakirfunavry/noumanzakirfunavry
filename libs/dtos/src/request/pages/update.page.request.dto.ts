import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePageRequestDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string

	@IsBoolean()
	isActive: boolean

	@IsBoolean()
	showSideBar: boolean

	@IsNumber()
	sideBarId: number

	@IsNumber()
	publishedBy: number

	@IsNumber()
	seoDetailsId: number

	// bannerId: number

	@IsArray()
	@IsNotEmpty()
	@IsNumber({}, { each: true })
	quotes: number[]

	@IsArray()
	@IsNotEmpty()
	@IsNumber({}, { each: true })
	tags: number[]
}