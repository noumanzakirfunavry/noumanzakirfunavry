import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateAlexaAudioRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAlexaAudioByIdResponseDto, GetAllAlexaAudioByIdResponseDto, GetAllAlexaAudioRequestDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AlexaAudioService } from './alexa-audio.service';

@Controller('admin/api/admin/alexa-audio')
export class AlexaAudioController {
    constructor(
        private alexaService: AlexaAudioService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("getAll")
    async getAllAlexaAudio(@Query() query: GetAllAlexaAudioRequestDto): Promise<GetAllAlexaAudioByIdResponseDto> {
        return await this.alexaService.getAllAlexaAudio(query)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Post()
    async addAlexaAudio(@Body() body: CreateAlexaAudioRequestDto): Promise<GenericResponseDto> {
        return await this.alexaService.addAlexaAudio(body, "Added successfully")
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put(":id")
    async updateAlexaAudio(@Req() req, @Param("id") id: number, @Body() body: CreateAlexaAudioRequestDto): Promise<GenericResponseDto> {
        return await this.alexaService.updateAlexaAudio(body, id, req)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get(":id")
    async getAlexaAudioById(@Param("id") id: number): Promise<GetAlexaAudioByIdResponseDto> {
        return await this.alexaService.getAlexaAudioById(id)
    }


    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteAlexaAudio(@Query() query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        return await this.alexaService.deleteAlexaAudio(query)
    }
}
