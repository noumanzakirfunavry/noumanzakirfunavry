import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
  providers: [EpisodesService],
  controllers: [EpisodesController],
  imports : [
    UtilityModule,
    ProvidersModule
  ]
})
export class EpisodesModule {}
