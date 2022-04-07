import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsClientController } from './news.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
  controllers: [NewsClientController],
  providers: [NewsService],
	imports : [
    ProvidersModule,
  ]
})
export class NewsModule {}
