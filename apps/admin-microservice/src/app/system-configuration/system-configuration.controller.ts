import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, UpdateGoogleAnalyticsRequestDto, UpdateSiteConfiguration } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { SystemConfigurationService } from './system-configuration.service';

@Controller('admin/api/admin/site-configuration')
export class SystemConfigurationController {
    constructor(
        private systemConfigurationService : SystemConfigurationService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Put()
    async updateSystemConfiguration(@Body() body : UpdateSiteConfiguration) : Promise<GenericResponseDto>{
        return await this.systemConfigurationService.updateSystemConfiguration(body)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Put("google-analytics")
    async updateGoogleAnalytics(@Body() body : UpdateGoogleAnalyticsRequestDto) : Promise<GenericResponseDto>{
        return await this.systemConfigurationService.updateSystemConfiguration(body)
    }
}
