import { GenderTypes } from '@cnbc-monorepo/enums';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateSubscriberRequestDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @IsNotEmpty()
  jobPosition: string;

  @IsString()
  @IsNotEmpty()
  industry: string;

  @IsDateString()
  @IsNotEmpty()
  DOB: Date;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(GenderTypes)
  gender: GenderTypes;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
