import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import {GenericResponseDto, UserLoginDto} from '@cnbc-monorepo/dtos'
import { AnthenticationService } from './anthentication.service';
import { JwtAuthGuard } from '@cnbc-monorepo/auth-module';

@Controller('anthentication')
export class AnthenticationController {
    constructor(
        private authService : AnthenticationService
    ){}

    @Post('login')
    async loginUser(@Body() body : UserLoginDto):Promise<GenericResponseDto>{
        return this.authService.loginUser(body)
    }

    @UseGuards(JwtAuthGuard)
    @Get("checkToken")
    async checkToken(@Req() req : any):Promise<any>{
        return await req.user
    }

}
