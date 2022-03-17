import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateEpisodeRequestDto, GenericResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('admin/api/admin/episodes')
export class EpisodesController {
    constructor(
        private episodesService : EpisodesService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @Post()
    async createEpisode(@Req() req,@Body() body : CreateEpisodeRequestDto) : Promise<GenericResponseDto>{
        return await this.episodesService.createEpisode(body,req.user.data.id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @Put(":id")
    async updateEpisode(@Req() req,@Param("id") id : number,@Body() body : CreateEpisodeRequestDto) : Promise<GenericResponseDto>{
        return await this.episodesService.updateEpisode(body,id,req.user.data.id);
    }
}
