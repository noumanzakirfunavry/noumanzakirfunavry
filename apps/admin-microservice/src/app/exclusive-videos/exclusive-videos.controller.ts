import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateExclusiveVideosRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllExclusiveVideos, GetAllExclusiveVideosResponseDto, GetExclusiveVideoByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ExclusiveVideosService } from './exclusive-videos.service';

@Controller('exclusive-videos')
export class ExclusiveVideosController {
    constructor(
        private exclusiveVideosService : ExclusiveVideosService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @Post()
    async createExclusiveVideo(@Body() body : CreateExclusiveVideosRequestDto) : Promise<GenericResponseDto>{
        return await this.exclusiveVideosService.createExclusiveVideo(body);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Put(":id")
    async updateExclusiveVideo(@Param("id") id : number,@Body() body : CreateExclusiveVideosRequestDto) : Promise<GenericResponseDto>{
        return await this.exclusiveVideosService.updateExclusiveVideo(body,id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get("getAll")
    async getAllExclusiveVideos(@Query() query : GetAllExclusiveVideos) : Promise<GetAllExclusiveVideosResponseDto>{
        return await this.exclusiveVideosService.getAllExclusiveVideos(query);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get(":id")
    async getExclusiveVideoById(@Param("id") id : number) : Promise<GetExclusiveVideoByIdResponseDto>{
        return await this.exclusiveVideosService.getExclusiveVideoById(id);
    }

    
    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Delete()
    async deleteExclusiveVideoById(@Query() query : DeleteAlexaAudioRequestDto) : Promise<GenericResponseDto>{
        return await this.exclusiveVideosService.deleteExclusiveVideoById(query);
    }
}
