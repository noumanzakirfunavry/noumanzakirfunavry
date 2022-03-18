import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { PresentersController } from './presenters.controller';
import { PresentersService } from './presenters.service';

@Module({
  controllers: [PresentersController],
  providers: [PresentersService],
  imports : [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule,
  ]
})
export class PresentersModule {}
