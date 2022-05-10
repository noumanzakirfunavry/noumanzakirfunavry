import { Module } from '@nestjs/common';
import { DailymotionService } from './dailymotion.service';

@Module({
  controllers: [],
  providers: [DailymotionService]
})
export class DailymotionModule {}
