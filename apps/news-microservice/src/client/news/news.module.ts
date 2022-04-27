import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsClientController } from './news.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { ElkModule } from '@cnbc-monorepo/elk';
import { UtilityModule } from '@cnbc-monorepo/utility';

@Module({
  controllers: [NewsClientController],
  providers: [NewsService],
	imports : [
    ProvidersModule,
		UtilityModule,
		ElkModule
  ]
})
export class NewsModule {}
