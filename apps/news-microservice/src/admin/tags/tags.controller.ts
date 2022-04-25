import { JwtAuthGuard, Public, Rights, Roles } from "@cnbc-monorepo/auth-module";
import { AddTagRequestDto, DeleteCategoryRequestDto, GetAllTagsRequestDto } from "@cnbc-monorepo/dtos";
import { RightsTypes, RoleTypes } from "@cnbc-monorepo/enums";
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import { GEOGRAPHY } from "sequelize/types";
import { TagsService } from "./tags.service";

@Controller("news/api/admin/tags")
export class TagsController{

    constructor(
        private tagsService:TagsService
    ){}



    @Public()
    @Get('getAll')
    async getTags(@Query() query:GetAllTagsRequestDto){
        return await this.tagsService.getTags(query)
    }

    @Get('getById/:id')
    async getTagById(@Param("id") id:number){   
        return await this.tagsService.getTagById(id)
    }

    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
		@Rights(RightsTypes.MODIFY_TAGS)
    @Delete('delete/')
    async deleteTag(@Query() query:DeleteCategoryRequestDto){
        return await this.tagsService.deleteTag(query.ids)
    }

    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
		@Rights(RightsTypes.MODIFY_TAGS)
    @Post('add')
    async addTag(@Req() req ,@Body() body:AddTagRequestDto){
        return await this.tagsService.addTag(body,req.user.data.id)
    }

    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Put('update/:id')
		@Rights(RightsTypes.MODIFY_TAGS)
    async updateTag(@Param('id') id:number,@Body() body){
        return await this.tagsService.updateTag(id,body)
    }
}