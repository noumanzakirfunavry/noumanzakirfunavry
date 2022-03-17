import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { ExclusiveVideosController } from './exclusive-videos.controller';
import { ExclusiveVideosService } from './exclusive-videos.service';

@Module({
  controllers: [ExclusiveVideosController],
  providers: [ExclusiveVideosService],
  imports : [
    UtilityModule,
    ProvidersModule
  ]
})
export class ExclusiveVideosModule {}
