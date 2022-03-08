import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateNewsRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetNewsByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(
        private newService : NewsService
    ){}

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.CREATE)
    @Roles(RoleTypes.Admin)
    @Post()
    async addNews(@Req() req,@Body() body :  CreateNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newService.addNews(body,req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.UPDATE)
    @Roles(RoleTypes.Admin)
    @Put(":id")
    async updateNews(@Req() req ,@Param("id") id : number,@Body() body :  CreateNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newService.updateNews(body,id,req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.UPDATE)
    @Roles(RoleTypes.Admin)
    @Delete()
    async deleteNews(@Query() body :  DeleteAlexaAudioRequestDto) : Promise<GenericResponseDto>{
        return await this.newService.deleteNews(body)
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.UPDATE)
    @Roles(RoleTypes.Admin)
    @Get(":id")
    async getNewsById(@Param("id") id : number) : Promise<GetNewsByIdResponseDto>{
        return await this.newService.getNewsById(id)
    }
}
