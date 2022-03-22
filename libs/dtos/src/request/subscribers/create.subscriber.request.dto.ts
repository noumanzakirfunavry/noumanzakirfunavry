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
  // undefined is used to bypass a parameter
  @IsPhoneNumber(undefined, {
    message: 'Phone number must be valid phone number with country code',
  })
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
