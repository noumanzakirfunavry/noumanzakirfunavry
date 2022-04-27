import { MenuPositionTypes } from "@cnbc-monorepo/enums"
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateMenuRequestDto{
	@IsString()
	@IsNotEmpty()
	title : string

	@IsOptional()
	@IsNumber()
	orderNo?: number

	@IsString()
	@IsNotEmpty()
	url : string

	@IsBoolean()
	visible : boolean

	@IsBoolean()
	isActive : boolean

	@IsOptional()
	@IsNumber()
	parentMenuId?: number
	
	@IsEnum(MenuPositionTypes)
	position : MenuPositionTypes
}