import { Body, Controller, Get, HttpStatus, Post, Put, Req, UseGuards } from '@nestjs/common';
import { GenericResponseDto, RegisterAdminRequestDto, UpdatePasswordRequestDto, UserLoginDto } from '@cnbc-monorepo/dtos'
import { AnthenticationService } from './anthentication.service';
import { JwtAuthGuard, Public, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';

@Controller('authentication')
export class AnthenticationController {
    constructor(
        private authService: AnthenticationService
    ) { }

    @Public()
    @Post('login')
    async loginUser(@Body() body: UserLoginDto): Promise<GenericResponseDto> {
        return await this.authService.loginUser(body)
    }

    @UseGuards(JwtAuthGuard)
    @Put("password/update")
    async updatePassword(@Req() req, @Body() body: UpdatePasswordRequestDto): Promise<GenericResponseDto> {
        return await this.authService.updatePassword(body, req.user.data)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Rights(RightsTypes.CREATE)
    @Post("register")
    async registerAdmin(@Req() req, @Body() body: RegisterAdminRequestDto): Promise<GenericResponseDto> {
        return await this.authService.registerAdmin(req.user.roles[0], body)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @Get("checkToken")
    async checkToken(@Req() req): Promise<any> {
        return await req.user
    }

}
