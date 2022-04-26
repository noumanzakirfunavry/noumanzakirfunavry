import { JwtAuthGuard, Roles } from '@cnbc-monorepo/auth-module';
import { CreateEpisodeRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllEpisodesRequestDto } from '@cnbc-monorepo/dtos';
import { RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('admin/api/admin/episodes')
export class EpisodesController {
    constructor(
        private episodesService: EpisodesService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Post()
    async createEpisode(@Req() req, @Body() body: CreateEpisodeRequestDto): Promise<GenericResponseDto> {
        return await this.episodesService.createEpisode(body, req.user.data.id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Put(":id")
    async updateEpisode(@Req() req, @Param("id") id: number, @Body() body: CreateEpisodeRequestDto): Promise<GenericResponseDto> {
        return await this.episodesService.updateEpisode(body, id, req.user.data.id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Get("getAll")
    async getAllEpisodes(@Query() query: GetAllEpisodesRequestDto): Promise<GenericResponseDto> {
        return await this.episodesService.getAllEpisodes(query);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Get(":id")
    async getEpisodeById(@Param("id") id: number): Promise<GenericResponseDto> {
        return await this.episodesService.getEpisodeById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Delete()
    async deleteEpisodes(@Query() query : DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        return await this.episodesService.deleteEpisodes(query);
    }

}
