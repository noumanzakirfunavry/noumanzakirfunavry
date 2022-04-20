import { MenuPositionTypes } from '@cnbc-monorepo/enums';
import {
	IsBoolean,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator';

export class UpdateMenuRequestDto {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	title?: string;

	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	parentMenuId?: number;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	url?: string;

	@IsOptional()
	@IsBoolean()
	visible?: boolean;

	@IsOptional()
	@IsBoolean()
	isActive?: boolean;

	@IsEnum(MenuPositionTypes)
	position?: MenuPositionTypes;
}
