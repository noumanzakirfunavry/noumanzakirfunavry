import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { EntityModule } from '@cnbc-monorepo/entity';
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
    UtilityModule,
  ]
})
export class NewsTypeModule {}
