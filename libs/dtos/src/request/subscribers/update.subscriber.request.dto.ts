import { Transform } from 'class-transformer';
import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString
} from 'class-validator';
import { getNames } from 'country-list';

export class UpdateSubscriberRequestDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  jobPosition?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  industry?: string;

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  DOB?: Date;

  @IsOptional()
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
  country?: string;
}
