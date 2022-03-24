import { Module } from '@nestjs/common';
import { NewsTypesService } from './news-types.service';
import { NewsTypesController } from './news-types.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';

@Module({
  providers: [NewsTypesService],
  controllers: [NewsTypesController],
  imports : [
    ProvidersModule,
    UtilityModule
  ]
})
export class NewsTypesModule {}
