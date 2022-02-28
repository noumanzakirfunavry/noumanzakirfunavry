import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import {AddJobRequestDto, DeleteJobRequestDto, GetALLJobsRequestDto, GetJobByIdResponseDto, UpdateJobRequestDto} from '@cnbc-monorepo/dtos'

@Controller("admin/api/admin/jobs")
export class JobsController{
    constructor(
        private jobsService:JobsService,
    ){}

    @Post('add')
    async addJob(@Body() body:AddJobRequestDto){
        return this.jobsService.AddJob(body)
    }
    @Get('getAll')
    async getAll(@Query() query:GetALLJobsRequestDto){
        return this.jobsService.getAll(query)
    }
    @Get('getById/:id')
    async getById(@Param("id") id:number){
        return this.jobsService.getById(id)
    }
    @Put('update')
    async update(@Body() body:UpdateJobRequestDto){
        return this.jobsService.update(body)
    }
    @Delete('delete')
    async delete(@Query() query:DeleteJobRequestDto){
        return this.jobsService.delete(query)
    }



}