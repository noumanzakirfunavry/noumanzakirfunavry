import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString
} from 'class-validator';

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
  @IsNotEmpty()
  country?: string;
}
