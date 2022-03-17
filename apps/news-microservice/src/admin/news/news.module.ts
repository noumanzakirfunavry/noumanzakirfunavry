import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import {AuthModuleModule} from '@cnbc-monorepo/auth-module'
import {UtilityModule} from '@cnbc-monorepo/utility'
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
