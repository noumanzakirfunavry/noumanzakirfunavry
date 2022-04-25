import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { GenericResponseDto, RegisterAdminRequestDto, RequestResetPasswordRequestDto, ResetPasswordRequestDto, UpdateAdminRequestDto, UpdatePasswordRequestDto, UserLoginDto } from '@cnbc-monorepo/dtos'
import { AnthenticationService } from './anthentication.service';
import { JwtAuthGuard, Public, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('admin/api/admin/authentication')
export class AnthenticationController {
    constructor(
        private authService: AnthenticationService
    ) { }

    @UseGuards(ThrottlerGuard)
    @Throttle(10,60)
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
    @Post("register")
    async registerAdmin(@Req() req, @Body() body: RegisterAdminRequestDto): Promise<GenericResponseDto> {
        return await this.authService.registerAdmin(req.user.roles[0], body)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Put("update/:id")
    async updateAdmin(@Param("id") id : number, @Body() body: UpdateAdminRequestDto): Promise<GenericResponseDto> {
        return await this.authService.updateAdmin(id, body)
    }

    @Public()
    @Post('request/password/reset')
    async requestResetPassword(@Body() body : RequestResetPasswordRequestDto):Promise<GenericResponseDto>{
        return await this.authService.requestResetPassword(body);
    }

    @Public()
    @Post('password/reset/:token')
    async resetPassword(@Param("token") token, @Body() body : ResetPasswordRequestDto):Promise<GenericResponseDto>{
        return await this.authService.resetPassword(token,body);
    }

    @UseGuards(JwtAuthGuard)
    @Post("logout")
    async logOut(@Req() req): Promise<GenericResponseDto> {
        return await this.authService.logOut(req.user.sessionId)
    }

}
