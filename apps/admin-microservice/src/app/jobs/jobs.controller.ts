import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import {AddJobRequestDto, DeleteJobRequestDto, GetALLJobsRequestDto, GetJobByIdResponseDto, UpdateJobRequestDto} from '@cnbc-monorepo/dtos'
import { Public } from "@cnbc-monorepo/auth-module";
import { Request } from "express";

@Controller("admin/api/admin/jobs")
export class JobsController{
    constructor(
        private jobsService:JobsService,
    ){}

    @Post('add')
    async addJob(@Body() body:AddJobRequestDto, @Req() req){
        return this.jobsService.AddJob({...body, publishedBy: req.user.data.id})
    }
    
    @Get('getAll')
    async getAll(@Query() query:GetALLJobsRequestDto){
        return this.jobsService.getAll(query)
    }
    
    @Get('getById/:id')
    async getById(@Param("id") id:number){
        return this.jobsService.getById(id)
    }
    
    @Put('update/:id')
    async update(@Param("id") id:number,@Body() body:UpdateJobRequestDto){
        return this.jobsService.update(id,body)
    }
    
    @Delete('delete')
    async delete(@Query() query:DeleteJobRequestDto){
        return this.jobsService.delete(query)
    }
}