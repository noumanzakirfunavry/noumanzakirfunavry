import { AddBreakingNewsRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { BreakingNewsService } from "./breakingNews.service";

@Controller('news/api/admin/breakingNews')
export class BreakingNewsController{
    constructor(
        private breakingNewsService:BreakingNewsService
    ){}


    @Post("add")
    async createBreakingNews(@Body() body:AddBreakingNewsRequestDto){
        return await this.breakingNewsService.create(body)
    }
    
}