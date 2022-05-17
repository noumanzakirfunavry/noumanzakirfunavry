import { Public } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, GetMostReadNews, GetMostReadNewsDto, GetNewsByFlagsRequestDto, PaginatedRequestDto, SearchNewsRequestDto } from '@cnbc-monorepo/dtos';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { NewsService } from './news.service';

@Public()
@Controller('news/api/client/news')
export class NewsClientController {
	constructor(private newService: NewsService) { }

	@Get('/getById/:id')
	getNewsById(@Param('id', ParseIntPipe) newsId: number, @Req() req) {
		return this.newService.getNewsById(newsId, req);
	}

	@Get('/get/category/:categoryId')
	getElkNewsByCategory(@Param('categoryId', ParseIntPipe) categoryId: number, @Query() paginationDTO: PaginatedRequestDto) {
		return this.newService.elkGetNewsByCategory(categoryId, paginationDTO)
	}

	@Get('/get/flags')
	elkGetNewsByFlags(@Query() getNewsByFlagsRequestDto: GetNewsByFlagsRequestDto) {
		return this.newService.elkGetNewsByFlags(getNewsByFlagsRequestDto)
	}

	@Post('/search')
	elkSearchNews(@Body() searchNewsRequestDto: SearchNewsRequestDto) {
		return this.newService.elkSearchNews(searchNewsRequestDto)
	}

	@Get('/mostRead')
	getMostReadNews(@Query() getMostReadNewsDto: GetMostReadNewsDto): Promise<GenericResponseDto> {
		return this.newService.getMostReadNews(getMostReadNewsDto)
	}

}
