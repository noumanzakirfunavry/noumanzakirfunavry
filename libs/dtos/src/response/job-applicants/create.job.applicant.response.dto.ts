import { JobApplicants } from '@cnbc-monorepo/entity';

export class CreateJobApplicantResponseDto {
  statusCode: number;
  message: string;
  response: JobApplicants;
  constructor(statusCode: number, message: string, applicant: JobApplicants) {
    this.statusCode = statusCode;
    this.message = message;
    this.response = applicant;
  }
}
