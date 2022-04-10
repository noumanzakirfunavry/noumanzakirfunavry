import { Public } from '@cnbc-monorepo/auth-module';
import { GetNewsByFlagsRequestDto, SearchNewsRequestDto } from '@cnbc-monorepo/dtos';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news/api/client/news')
export class NewsClientController {
	constructor(private newService: NewsService) { }

	@Public()
	@Get('/getById/:id')
	getNewsById(@Param('id', ParseIntPipe) newsId: number) {
		return this.newService.getNewsById(newsId);
	}

	// ! does category comes query params? string or array of strings?
	@Public()
	@Get('/get/category/:categoryId')
	getElkNewsByCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
		return this.newService.elkGetNewsByCategory(categoryId)
	}

	@Public()
	@Get('/get/flags')
	elkGetNewsByFlags(@Query() getNewsByFlagsRequestDto: GetNewsByFlagsRequestDto) {
		return this.newService.elkGetNewsByFlags(getNewsByFlagsRequestDto)
	}

	@Public()
	@Post('/search')
	elkSearchNews(@Body() searchNewsRequestDto: SearchNewsRequestDto) {
		return this.newService.elkSearchNews(searchNewsRequestDto)
	}
}
