import { MenuPositionTypes } from '@cnbc-monorepo/enums';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetMenuRequestDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsEnum(MenuPositionTypes)
  position?: MenuPositionTypes;

  @IsOptional()
  @IsBoolean()
  @Transform((input) => {
    if (input.value === 'true' || input.value === '1') return true;
    if (input.value === 'false' || input.value === '0') return false;
    return input.value;
  })
  isActive?: boolean;
}
