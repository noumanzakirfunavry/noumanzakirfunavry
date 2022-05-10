import { Module } from '@nestjs/common';
import { DailymotionModule } from './dailymotion/dailymotion.module';

@Module({
  imports: [DailymotionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
