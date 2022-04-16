import { Public } from '@cnbc-monorepo/auth-module';
import {
	GetALLJobsRequestDto
} from '@cnbc-monorepo/dtos';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('admin/api/client/jobs')
export class JobsClientController {
  constructor(private jobService: JobsService) {}

  @Public()
  @Get('getAll')
  async getAll(@Query() query: GetALLJobsRequestDto) {
    return await this.jobService.getAllforClient(query);
  }

  @Public()
  @Get('getById/:id')
  async getJobById(@Param('id', ParseIntPipe) jobId: number) {
    return await this.jobService.getById(jobId)
  }
}
