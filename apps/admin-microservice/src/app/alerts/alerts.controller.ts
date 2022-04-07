import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateAlertRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAlertByIdResponseDto, GetAlertsRequestDto, GetAllAlertsResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AlertsService } from './alerts.service';

@Controller('admin/api/admin/alerts')
export class AlertsController {
    constructor(
        private alertsService : AlertsService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Post()
    async createAlert(@Body() body : CreateAlertRequestDto) : Promise<GenericResponseDto>{
        return await this.alertsService.createAlert(body);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put(":id")
    async updateAlert(@Param("id") id : number,@Body() body : CreateAlertRequestDto) : Promise<GenericResponseDto>{
        return await this.alertsService.updateAlert(body,id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("getAll")
    async getAllAlerts(@Query() query : GetAlertsRequestDto) : Promise<GetAllAlertsResponseDto>{
        return await this.alertsService.getAllAlerts(query);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get(":id")
    async getAlertById(@Param("id") id : number) : Promise<GetAlertByIdResponseDto>{
        return await this.alertsService.getAlertById(id);
    }

    
    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Delete()
    async deleteAlertById(@Query() query : DeleteAlexaAudioRequestDto) : Promise<GenericResponseDto>{
        return await this.alertsService.deleteAlertById(query);
    }
}
