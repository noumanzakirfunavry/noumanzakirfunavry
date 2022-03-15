import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { AlertsController } from './alerts.controller';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
  providers: [AlertsService],
  controllers: [AlertsController],
  imports : [
    ProvidersModule,
    UtilityModule,
  ]
})
export class AlertsModule {}
