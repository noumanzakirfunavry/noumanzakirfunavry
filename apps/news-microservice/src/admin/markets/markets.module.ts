import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsController } from './markets.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
	imports: [ProvidersModule],
  controllers: [MarketsController],
  providers: [MarketsService]
})
export class MarketsModule {}
