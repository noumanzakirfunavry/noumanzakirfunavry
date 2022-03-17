import { Public } from "@cnbc-monorepo/auth-module";
import { AddBreakingNewsRequestDto, DeleteBreakingNewsRequestDto, GetAllBreakingNewsRequestDto, UpdateBreakingNewsRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { BreakingNewsService } from "./breakingNews.service";

@Controller('admin/api/admin/breakingNews')
export class BreakingNewsController{
    constructor(
        private breakingNewsService:BreakingNewsService
    ){}


    @Public()
    @Post("add")
    async createBreakingNews(@Body() body:AddBreakingNewsRequestDto){
        return await this.breakingNewsService.create(body)
    }
    @Public()
    @Put("update/:id")
    async update(@Param('id') id:number,@Body() body:UpdateBreakingNewsRequestDto){
        return await this.breakingNewsService.update(id,body)
    }
    @Public()
    @Delete("delete")
    async delete(@Query() query:DeleteBreakingNewsRequestDto){
        return await this.breakingNewsService.delete(query.ids)
    }
    @Public()
    @Get("getAll")
    async getAll(@Query() query:GetAllBreakingNewsRequestDto){
        return await this.breakingNewsService.getAll(query)
    }

    @Public()
    @Get("getById/:id")
    async getById(@Param('id') id:number){
        return await this.breakingNewsService.getById(id)
    }
}