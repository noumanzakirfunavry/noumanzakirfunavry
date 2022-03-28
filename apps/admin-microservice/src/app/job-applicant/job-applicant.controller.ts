import { JwtAuthGuard, Public, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, GetAllJobApplicantsRequestDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JobApplicantService } from './job-applicant.service';

@Controller('admin/api/admin/job-applicant')
export class JobApplicantController {
    constructor(
        private jobService : JobApplicantService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get("getAll")
    async getAllJobApplicants(@Query() query : GetAllJobApplicantsRequestDto) : Promise<GenericResponseDto>{
        return await this.jobService.getAllJobApplicants(query)
    }


    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get(":id")
    async getJobApplicantById(@Param("id") id : number) : Promise<GenericResponseDto>{
        return await this.jobService.getJobApplicantById(id)
    }


}
