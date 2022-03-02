import { JwtAuthGuard, Public, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateSocialMediaLinkRequestDto, DeleteSocialMediaLinkById, GenericResponseDto, GetAllSocialMediaLinksRequestDto, GetAllSocialMediaLinksResponseDto, GetSocialMediaLinkByIdRequestDto, GetSocialMediaLinkByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { SocialMediaLinksService } from './social-media-links.service';

@Controller('social-media-links')
export class SocialMediaLinksController {
    constructor(
        private socialMediaLinksService: SocialMediaLinksService
    ) {

    }
    @UseGuards(JwtAuthGuard)
    @Get('all')
    async getAllSocialMediaLinks(@Query() query: GetAllSocialMediaLinksRequestDto): Promise<GetAllSocialMediaLinksResponseDto> {
        return await this.socialMediaLinksService.getAllSocialMediaLinks(query)
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async getSocialMediaLinkById(@Param("id") id : number): Promise<GetSocialMediaLinkByIdResponseDto> {
        return await this.socialMediaLinksService.getSocialMediaLinkById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteSocialMediaLinkById(@Query() query: DeleteSocialMediaLinkById): Promise<GenericResponseDto> {
        return await this.socialMediaLinksService.deleteSocialMediaLinkById(query)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Rights(RightsTypes.CREATE)
    @Post()
    async createSocialMediaLink(@Req() req, @Body() body: CreateSocialMediaLinkRequestDto): Promise<GenericResponseDto> {
        return await this.socialMediaLinksService.createSocialMediaLink(body, req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Rights(RightsTypes.UPDATE)
    @Put(":id")
    async updateSocialMediaLink(@Param("id") postId: number,@Body() body: CreateSocialMediaLinkRequestDto): Promise<GenericResponseDto> {
        return await this.socialMediaLinksService.updateSocialMediaLink(body,postId)
    }
}
