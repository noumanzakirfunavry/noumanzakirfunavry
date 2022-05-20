import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { InterceptorsModule } from '@cnbc-monorepo/interceptors';
@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports : [
    ProvidersModule,
    UtilityModule,
    ExceptionHandlingModule,
		InterceptorsModule
  ]
})
export class NewsModule {}
