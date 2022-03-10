import { Public } from "@cnbc-monorepo/auth-module";
import { AddQuickLinksRequestDto, DeleteQuickLinkRequestDto, PaginatedRequestDto, UpdateQuickLinksRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { identity } from "rxjs";
import { QuickLinksService } from "./quickLinks.service";

@Controller('news/api/admin/quickLinks')
export class QuickLinksController{
    constructor(
        private quickLinksService:QuickLinksService,
    ){}

    @Public()
    @Post('add')
    async addQuickLinks(@Body() body:AddQuickLinksRequestDto){
        return await this.quickLinksService.addQuickLinks(body)
    }
    @Public()
    @Put('update/:id')
        async updateQuickLinks(@Param('id') id:number,@Query() body:UpdateQuickLinksRequestDto){
        return await this.quickLinksService.updateQuickLinks(id,body)
    }
    @Public()
    @Get('getAll')
    async getAllQuickLinks(@Query() query:PaginatedRequestDto){
        return await this.quickLinksService.getAllQuickLinks(query)
    }
    @Public()
    @Get('getById/:id')
    async getById(@Param('id') id:number){
        return await this.quickLinksService.getById(id)
    }
    @Public()
    @Delete('delete')
    async deleteByIds(@Query() query:DeleteQuickLinkRequestDto){
        return await this.quickLinksService.deleteByIds(query.ids)
    }
}