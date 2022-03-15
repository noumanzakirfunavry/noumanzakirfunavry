import { Public } from "@cnbc-monorepo/auth-module";
import { GetAllJobResponseDto, GetALLJobsRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Get, Query } from "@nestjs/common";
import { JobsService } from "./jobs.service";

@Controller('admin/api/client/jobs')
export class JobsClientController{

    constructor(private jobService:JobsService){}
    
    @Public()
    @Get('getAll')
    async getAll(@Query() query:GetALLJobsRequestDto){
        return await this.jobService.getAllforClient(query) 
    }
    

}