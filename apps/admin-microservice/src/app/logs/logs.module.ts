import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';

@Module({
	imports: [ProvidersModule, UtilityModule],
	controllers: [LogsController],
	providers: [LogsService]
})
export class LogsModule { }
