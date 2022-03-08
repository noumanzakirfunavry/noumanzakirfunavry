import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { NewsTypeController } from './news-type.controller';
import { NewsTypeService } from './news-type.service';

@Module({
  controllers: [NewsTypeController],
  providers: [NewsTypeService],
  imports : [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule,
  ]
})
export class NewsTypeModule {}
