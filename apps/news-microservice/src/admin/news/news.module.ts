import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports : [
    ProvidersModule,
    UtilityModule,
    ExceptionHandlingModule,
  ]
})
export class NewsModule {}
