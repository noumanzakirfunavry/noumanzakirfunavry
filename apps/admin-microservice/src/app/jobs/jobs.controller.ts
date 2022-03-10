import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import {AddJobRequestDto, DeleteJobRequestDto, GetALLJobsRequestDto, GetJobByIdResponseDto, UpdateJobRequestDto} from '@cnbc-monorepo/dtos'
import { Public } from "@cnbc-monorepo/auth-module";

@Controller("Admin/api/admin/jobs")
export class JobsController{
    constructor(
        private jobsService:JobsService,
    ){}

    @Public()
    @Post('add')
    async addJob(@Body() body:AddJobRequestDto){
        return this.jobsService.AddJob(body)
    }
    @Public()
    @Get('getAll')
    async getAll(@Query() query:GetALLJobsRequestDto){
        return this.jobsService.getAll(query)
    }
    @Public()
    @Get('getById/:id')
    async getById(@Param("id") id:number){
        return this.jobsService.getById(id)
    }
    @Public()
    @Put('update/:id')
    async update(@Param("id") id:number,@Body() body:UpdateJobRequestDto){
        return this.jobsService.update(id,body)
    }
    @Public()
    @Delete('delete')
    async delete(@Query() query:DeleteJobRequestDto){
        return this.jobsService.delete(query)
    }



}