import { Public } from "@cnbc-monorepo/auth-module";
import { AddTagRequestDto, DeleteCategoryRequestDto, GetAllTagsRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { GEOGRAPHY } from "sequelize/types";
import { TagsService } from "./tags.service";

@Controller("news/api/admin/tags")
export class TagsController{

    constructor(
        private tagsService:TagsService
    ){}

    
    @Get('getAll')
    async getTags(@Query() query:GetAllTagsRequestDto){
        return await this.tagsService.getTags(query)
    }

    @Get('getById/:id')
    async getTagById(@Param("id") id:number){   
        return await this.tagsService.getTagById(id)
    }

    @Delete('delete/')
    async deleteTag(@Query() query:DeleteCategoryRequestDto){
        return await this.tagsService.deleteTag(query.ids)
    }

    @Post('add')
    async addTag(@Body() body:AddTagRequestDto){
        return await this.tagsService.addTag(body)
    }

    @Put('update/:id')
    async updateTag(@Param('id') id:number,@Body() body){
        return await this.tagsService.updateTag(id,body)
    }
}