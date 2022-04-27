import { Public, Rights, Roles } from "@cnbc-monorepo/auth-module";
import { AddQuickLinksRequestDto, DeleteQuickLinkRequestDto, GetAllQuickLinksRequestDto, PaginatedRequestDto, UpdateQuickLinksRequestDto } from "@cnbc-monorepo/dtos";
import { RightsTypes, RoleTypes } from "@cnbc-monorepo/enums";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { QuickLinksService } from "./quickLinks.service";

@Roles(RoleTypes.Admin)
@Controller('news/api/admin/quickLinks')
export class QuickLinksController{
    constructor(
        private quickLinksService:QuickLinksService,
    ){}

		@Rights(RightsTypes.MODIFY_QUICKLINKS)
    @Post('add')
    async addQuickLinks(@Body() body:AddQuickLinksRequestDto){
        return await this.quickLinksService.addQuickLinks(body)
    }

		@Rights(RightsTypes.MODIFY_QUICKLINKS)
    @Put('update/:id')
        async updateQuickLinks(@Param('id') id:number,@Body() body:UpdateQuickLinksRequestDto){
        return await this.quickLinksService.updateQuickLinks(id,body)
    }
    @Get('getAll')
    async getAllQuickLinks(@Query() query:GetAllQuickLinksRequestDto){
        return await this.quickLinksService.getAllQuickLinks(query)
    }
    
    @Get('getById/:id')
    async getById(@Param('id') id:number){
        return await this.quickLinksService.getById(id)
    }
        
		@Rights(RightsTypes.MODIFY_QUICKLINKS)
    @Delete('delete')
    async deleteByIds(@Query() query:DeleteQuickLinkRequestDto){
        return await this.quickLinksService.deleteByIds(query.ids)
    }
}