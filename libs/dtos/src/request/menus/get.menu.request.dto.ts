import { MenuPositionTypes } from '@cnbc-monorepo/enums';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { PaginatedRequestDto } from '../pagination.request.dto';

export class GetMenuRequestDto extends PaginatedRequestDto {
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
