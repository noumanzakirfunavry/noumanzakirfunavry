import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, GetAllEditorsChoiceNewsResponseDto, GetAllFeaturedNewsResponseDto, GetAllTrendingNewsResponseDto, UpdateEditorChoiceNewsRequestDto, UpdateFeaturedNewsRequestDto, UpdateTrendingNewsRequestDto } from '@cnbc-monorepo/dtos';
import { EditorsChoiceNews, FeaturedNews, TrendingNews } from '@cnbc-monorepo/entity';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Get, HttpStatus, Put, Req, UseGuards } from '@nestjs/common';
import { NewsTypeService } from './news-type.service';

@Controller('news/api/admin/news-type')
export class NewsTypeController {
    constructor(
        private newsService : NewsTypeService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("featured/getAll")
    async getFeaturedNews() : Promise<GetAllFeaturedNewsResponseDto>{
        const featured_news =  await this.newsService.getAllNews(FeaturedNews)
        return new GetAllFeaturedNewsResponseDto(
            HttpStatus.OK,
            "Featured news fetched successfully",
            featured_news
        )
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("trending/getAll")
    async getTrendingNews() : Promise<GetAllTrendingNewsResponseDto>{
        const trending_news =  await this.newsService.getAllNews(TrendingNews)
        return new GetAllTrendingNewsResponseDto(
            HttpStatus.OK,
            "Trending news fetched successfully",
            trending_news
        )
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("editors-choice-news/getAll")
    async getEditorsChoiceNews() : Promise<GetAllEditorsChoiceNewsResponseDto>{
        const editors_choice_news =  await this.newsService.getAllNews(EditorsChoiceNews)
        return new GetAllEditorsChoiceNewsResponseDto(
            HttpStatus.OK,
            "Editors choice news fetched successfully",
            editors_choice_news
        )
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put("featured/update")
    async updateFeaturedNews(@Req() req,@Body() body : UpdateFeaturedNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newsService.updateNews(FeaturedNews,body,req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put("trending/update")
    async updateTrendingNews(@Req() req,@Body() body : UpdateTrendingNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newsService.updateNews(TrendingNews,body,req.user.data.id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put("editors-choice-news/update")
    async updateEditorChoiceNews(@Req() req,@Body() body : UpdateEditorChoiceNewsRequestDto) : Promise<GenericResponseDto>{
        return await this.newsService.updateNews(EditorsChoiceNews,body,req.user.data.id)
    }
}
