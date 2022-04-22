import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { ExclusiveVideosClientController } from './exclusive-videos.client.controller';
import { ExclusiveVideosController } from './exclusive-videos.controller';
import { ExclusiveVideosService } from './exclusive-videos.service';

@Module({
  controllers: [ExclusiveVideosController, ExclusiveVideosClientController],
  providers: [ExclusiveVideosService],
  imports : [
    UtilityModule,
    ProvidersModule
  ]
})
export class ExclusiveVideosModule {}
