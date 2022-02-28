import { AddQuickLinksRequestDto, DeleteQuickLinkRequestDto, PaginatedRequestDto, UpdateQuickLinksRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { QuickLinksService } from "./quickLinks.service";

@Controller('news/api/admin/quickLinks')
export class QuickLinksController{
    constructor(
        private quickLinksService:QuickLinksService,
    ){}

    @Post('add')
    async addQuickLinks(@Body() body:AddQuickLinksRequestDto){
        return await this.quickLinksService.addQuickLinks(body)
    }

    @Put('update')
    async updateQuickLinks(@Body() body:UpdateQuickLinksRequestDto){
        return await this.quickLinksService.updateQuickLinks(body)
    }
    @Get('getAll')
    async getAllQuickLinks(@Query() query:PaginatedRequestDto){
        return await this.quickLinksService.getAllQuickLinks(query)
    }
    @Get('getById/:id')
    async getById(@Param('id') id:number){
        return await this.quickLinksService.getById(id)
    }
    @Delete('delete')
    async deleteByIds(@Query() query:DeleteQuickLinkRequestDto){
        return await this.quickLinksService.deleteByIds(query.ids)
    }


}