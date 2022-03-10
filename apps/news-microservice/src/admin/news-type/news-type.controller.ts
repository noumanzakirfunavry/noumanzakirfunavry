import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, GetAllEditorsChoiceNewsResponseDto, GetAllFeaturedNewsResponseDto, GetAllTrendingNewsResponseDto, UpdateFeaturedNewsRequestDto, UpdateTrendingNewsRequestDto } from '@cnbc-monorepo/dtos';
import { EditorsChoiceNews, FeaturedNews, TrendingNews } from '@cnbc-monorepo/entity';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Get, HttpStatus, Put, Req, UseGuards } from '@nestjs/common';
import { NewsTypeService } from './news-type.service';

@Controller('news/type')
export class NewsTypeController {
    constructor(
        private newsService : NewsTypeService
    ){}

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.GET)
    @Roles(RoleTypes.Admin)
    @Get("featured")
    async getFeaturedNews() : Promise<GetAllFeaturedNewsResponseDto>{
        const featured_news =  await this.newsService.getAllNews(FeaturedNews)
        return new GetAllFeaturedNewsResponseDto(
            HttpStatus.OK,
            "Featured news fetched successfully",
            featured_news
        )
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.GET)
    @Roles(RoleTypes.Admin)
    @Get("trending")
    async getTrendingNews() : Promise<GetAllTrendingNewsResponseDto>{
        const trending_news =  await this.newsService.getAllNews(TrendingNews)
        return new GetAllTrendingNewsResponseDto(
            HttpStatus.OK,
            "Trending news fetched successfully",
            trending_news
        )
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.GET)
    @Roles(RoleTypes.Admin)
    @Get("editors-choice-news")
    async getEditorsChoiceNews() : Promise<GetAllEditorsChoiceNewsResponseDto>{
        const editors_choice_news =  await this.newsService.getAllNews(EditorsChoiceNews)
        return new GetAllEditorsChoiceNewsResponseDto(
            HttpStatus.OK,
            "Editors choice news fetched successfully",
            editors_choice_news
        )
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.UPDATE)
    @Roles(RoleTypes.Admin)
    @Put("update/featured")
    async updateFeaturedNews(@Req() req,@Body() body : UpdateFeaturedNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newsService.updateNews(FeaturedNews,body,req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Rights(RightsTypes.UPDATE)
    @Roles(RoleTypes.Admin)
    @Put("update/trending")
    async updateTrendingNews(@Req() req,@Body() body : UpdateTrendingNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newsService.updateNews(TrendingNews,body,req.user.data.id)
    }
}
