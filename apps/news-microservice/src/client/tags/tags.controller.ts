import { GetAllTagsRequestDto } from "@cnbc-monorepo/dtos";
import { Controller, Get, Query } from "@nestjs/common";
import { TagsService } from "./tags.service";

@Controller("News/api/client/tags")
export class TagsController{
    constructor(private tagsService:TagsService){}
    @Get('getAll')
    async getTags(@Query() query:GetAllTagsRequestDto){
        return await this.tagsService.getTags(query)
    }
}