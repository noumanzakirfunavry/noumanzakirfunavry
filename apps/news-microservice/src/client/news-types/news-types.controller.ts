import { Public } from '@cnbc-monorepo/auth-module';
import { GetAllFeaturedNewsResponseDto, GetAllTrendingNewsResponseDto } from '@cnbc-monorepo/dtos';
import { FeaturedNews, TrendingNews } from '@cnbc-monorepo/entity';
import { Controller, Get, HttpStatus } from '@nestjs/common';
import { NewsTypesService } from './news-types.service';

@Controller('news/api/client/news-types')
export class NewsTypesController {

    constructor(
        private newsTypeService: NewsTypesService
    ) { }

    @Public()
    @Get("featured/getAll")
    async getallFeaturedNews(): Promise<GetAllFeaturedNewsResponseDto> {
        const featured_news = await this.newsTypeService.getAllNews(FeaturedNews)
        return new GetAllFeaturedNewsResponseDto(
            HttpStatus.OK,
            "Featured news fetched successfully",
            featured_news
        )
    }

    @Public()
    @Get("trending/getAll")
    async getTrendingNews(): Promise<GetAllTrendingNewsResponseDto> {
        const trending_news = await this.newsTypeService.getAllNews(TrendingNews)
        return new GetAllTrendingNewsResponseDto(
            HttpStatus.OK,
            "Trending news fetched successfully",
            trending_news
        )
    }
}
