import { ProvidersModule } from '@cnbc-monorepo/providers';
import { Module } from '@nestjs/common';
import { DailymotionController } from './dailymotion.controller';
import { DailymotionService } from './dailymotion.service';

@Module({
	imports: [ProvidersModule],
  controllers: [DailymotionController],
  providers: [DailymotionService]
})
export class DailymotionModule {}
