import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { LiveStreamLinksController } from './live-stream-links.controller';
import { LiveStreamLinksService } from './live-stream-links.service';

@Module({
  controllers: [LiveStreamLinksController],
  providers: [LiveStreamLinksService],
  imports : [
    ProvidersModule,
    UtilityModule,
  ]
})
export class LiveStreamLinksModule {}
