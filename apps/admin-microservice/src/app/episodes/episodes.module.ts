import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { EpisodesClientController } from './episodes.client.controller';

@Module({
  providers: [EpisodesService],
  controllers: [EpisodesController, EpisodesClientController],
  imports : [
    UtilityModule,
    ProvidersModule
  ]
})
export class EpisodesModule {}
