import { EntityModule } from '@cnbc-monorepo/entity';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DailymotionModule } from './dailymotion/dailymotion.module';

@Module({
	imports: [ExceptionHandlingModule, EntityModule, ScheduleModule.forRoot(), DailymotionModule],
	controllers: [],
	providers: [],
})
export class AppModule { }
