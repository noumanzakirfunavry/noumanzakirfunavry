import { AddQuickLinksRequestDto, DeleteQuickLinkRequestDto, GetAllQuickLinksRequestDto, PaginatedRequestDto, UpdateQuickLinksRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { QuickLinksService } from "./quickLinks.service";

@Controller('news/api/client/quickLinks')
export class QuickLinksController{
    constructor(
        private quickLinksService:QuickLinksService,
    ){}

    @Get('getAll')
    async getAllQuickLinks(@Query() query:PaginatedRequestDto){  
        return await this.quickLinksService.getAllQuickLinks(query)
    }


}