import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMarketRequestDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  tickerId: number;

  @IsNumber()
  currencyId: number;

  @IsNumber()
  orderNo: number;

  @IsBoolean()
  isVisible: boolean;
}
