import { VisaStatusTypes } from '@cnbc-monorepo/enums';
import {
	IsBoolean,
	IsDateString,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsNumber, IsString
} from 'class-validator';

export class CreateJobApplicantRequestDto {
  @IsNumber()
  jobId: number;

  @IsString()
  @IsNotEmpty()
  applicantName: string;

  @IsNumber()
  applicantAge: number;

  @IsEmail()
  applicantEmail: string;

  @IsNumber()
  workExperience: number;

  @IsEnum(VisaStatusTypes)
  visaStatus: VisaStatusTypes;

  @IsBoolean()
  forFutureVacancy: boolean;

  @IsNotEmpty()
  @IsDateString()
  dob: string;

  @IsNumber()
  qualificationId: number;

  @IsNumber()
  nationalityId: number;

  @IsNumber()
  cvId: number;

	@IsNumber()
  languageId: number
}
