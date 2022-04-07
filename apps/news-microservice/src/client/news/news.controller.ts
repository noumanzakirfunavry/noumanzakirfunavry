import { Public } from '@cnbc-monorepo/auth-module';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news/api/client/news')
export class NewsClientController {
  constructor(private newService: NewsService) {}

  @Public()
  @Get('/getById/:id')
  getNewsById(@Param('id', ParseIntPipe) newsId: number) {
    return this.newService.getNewsById(newsId);
  }
}
