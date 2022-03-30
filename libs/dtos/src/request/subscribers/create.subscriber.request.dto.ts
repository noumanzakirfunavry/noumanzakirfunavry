import { GenderTypes } from '@cnbc-monorepo/enums';
import { Transform } from 'class-transformer';
import {
	IsBoolean,
	IsDateString,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsPhoneNumber,
	IsString,
	MinLength
} from 'class-validator';
import { getNames } from 'country-list';

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
	@Transform(input=>{
		// check if the provided country name is valid
		if(getNames().includes(input.value)){
			return input.value;
		} 
		// if country name is invalid, return empty string so thay IsNotEmpty validator throws error
		return '';
	})
	@IsNotEmpty({message: 'Country name must not be empty and must be a valid ISO-3166 country name'})
  country: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(GenderTypes)
  gender: GenderTypes;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
