import { Public } from '@cnbc-monorepo/auth-module';
import {
	CreateJobApplicantRequestDto,
	CreateJobApplicantResponseDto,
	DeleteJobApplicantResponseDto
} from '@cnbc-monorepo/dtos';
import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { JobApplicantService } from './job-applicant.service';

@Controller('admin/api/client/job-applicant')
export class JobApplicantClientController {
  constructor(private jobApplicantService: JobApplicantService) {}

  @Public()
  @Post('/create')
  async createJobApplicant(
    @Body() createJobApplicantRequestDto: CreateJobApplicantRequestDto
  ): Promise<CreateJobApplicantResponseDto> {
    return this.jobApplicantService.createJobApplicant(createJobApplicantRequestDto);
  }

  @Delete('/delete/:id')
  deleteJobApplicant(@Param('id', ParseIntPipe) jobApplicantId: number): Promise<DeleteJobApplicantResponseDto>{
		return this.jobApplicantService.deleteJobApplicant(jobApplicantId);
  }
}
