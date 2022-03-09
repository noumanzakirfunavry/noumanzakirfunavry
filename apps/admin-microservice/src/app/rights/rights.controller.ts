import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, RightsResponseDto, UpdateUserRightsRequestDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { RightsService } from './rights.service';

@Controller('rights')
export class RightsController {

    constructor(private rightsService: RightsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllRights(): Promise<RightsResponseDto> {
        return await this.rightsService.getAllRights()
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Put()
    async updateUserRights(@Body() body: UpdateUserRightsRequestDto): Promise<GenericResponseDto> {
        return await this.rightsService.updateUserRights(body)
    }
}
