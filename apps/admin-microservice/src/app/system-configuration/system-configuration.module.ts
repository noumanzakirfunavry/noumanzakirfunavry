import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { SystemConfigurationController } from './system-configuration.controller';
import { SystemConfigurationService } from './system-configuration.service';

@Module({
  controllers: [SystemConfigurationController],
  providers: [SystemConfigurationService],
  imports : [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule
  ]
})
export class SystemConfigurationModule {}
