import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateLiveStreamLinksRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllLiveStreamLinksRequestDto, GetAllLiveStreamLinksResponseDto, GetById, GetLiveStreamLinkByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { LiveStreamLinksService } from './live-stream-links.service';

@Controller('admin/api/admin/live-stream-links')
export class LiveStreamLinksController {

    constructor(
        private liveStreamLinksService: LiveStreamLinksService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get("getAll")
    async getAllLiveStreamLinks(@Query() query: GetAllLiveStreamLinksRequestDto): Promise<GetAllLiveStreamLinksResponseDto> {
        return await this.liveStreamLinksService.getAllLiveStreamLinks(query)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @Post()
    async addLiveStreamLinks(@Req() req, @Body() body: CreateLiveStreamLinksRequestDto): Promise<GenericResponseDto> {
        return await this.liveStreamLinksService.addLiveStreamLinks(body, req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Put(":id")
    async updateLiveStreamLinks(@Param("id") id: number, @Body() body: CreateLiveStreamLinksRequestDto): Promise<GenericResponseDto> {
        return await this.liveStreamLinksService.updateLiveStreamLinks(body, id)
    }


    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get(":id")
    async getLiveStreamLinkById(@Param("id") id: number): Promise<GetLiveStreamLinkByIdResponseDto> {
        return await this.liveStreamLinksService.getLiveStreamLinkById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Delete()
    async deleteLiveStreamLinkById(@Query() query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        return await this.liveStreamLinksService.deleteLiveStreamLinkById(query)
    }
}
