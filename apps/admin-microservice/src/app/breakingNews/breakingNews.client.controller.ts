import { Public } from "@cnbc-monorepo/auth-module";
import { GetAllBreakingNewsRequestDto } from "@cnbc-monorepo/dtos";
import { Controller, Get, Query } from "@nestjs/common";
import { BreakingNewsService } from "./breakingNews.service";

@Controller('admin/api/client/breakingNews')
export class BreakingNewsClientController{

    constructor(
        private breakingNewsService:BreakingNewsService
    ){}

    @Public()
    @Get('getAll')
    async getAll(@Query() query:GetAllBreakingNewsRequestDto){
        return await this.breakingNewsService.getAllForClient(query)
    }
}