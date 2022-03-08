import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateNewsRequestDto, GenericResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(
        private newService : NewsService
    ){}

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.CREATE)
    @Roles(RoleTypes.Admin)
    @Post()
    async addNews(@Req() req,@Body() body :  CreateNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newService.addNews(body,req.user.data.id)
    }
}
