import { JwtAuthGuard, Public, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateNewsRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllNewsRequestDto, GetNewsByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { runInThisContext } from 'vm';
import { NewsService } from './news.service';

@Controller('news/api/admin/news')
export class NewsController {
    constructor(
        private newService: NewsService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Post('add')
    async addNews(@Req() req, @Body() body: CreateNewsRequestDto): Promise<GenericResponseDto> {
        return await this.newService.addNews(body, req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put("update/:id")
    async updateNews(@Req() req, @Param("id") id: number, @Body() body: CreateNewsRequestDto): Promise<GenericResponseDto> {
        return await this.newService.updateNews(body, id, req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Delete("delete")
    async deleteNews(@Query() body: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        return await this.newService.deleteNews(body)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("getById/:id")
    async getNewsById(@Param("id") id: number): Promise<GetNewsByIdResponseDto> {
        return await this.newService.getNewsById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get('getAll')
    async getAllNews(@Query() query: GetAllNewsRequestDto): Promise<GenericResponseDto> {
        return await this.newService.getAllNews(query)
    }


    @Public()
    @Get('getNewsStatus/:id')
    async getNewsStatusById(@Param('id') id:number){
        return await this.newService.getNewsStatusById(id)
    }
}
