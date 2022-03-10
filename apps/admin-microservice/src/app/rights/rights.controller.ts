import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, RightsResponseDto, UpdateUserRightsRequestDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { RightsService } from './rights.service';

@Controller('rights')
export class RightsController {

    constructor(private rightsService: RightsService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllRights(): Promise<RightsResponseDto> {
        return await this.rightsService.getAllRights()
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Put(":id")
    async updateUserRights(@Param("id") id: number, @Body() body: UpdateUserRightsRequestDto): Promise<GenericResponseDto> {
        return await this.rightsService.updateUserRights(body, id)
    }
}
