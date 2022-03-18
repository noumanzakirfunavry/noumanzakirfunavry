import { Module } from '@nestjs/common';
import { RightsService } from './rights.service';
import { RightsController } from './rights.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling'
@Module({
  providers: [RightsService],
  controllers: [RightsController],
  imports: [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule]
})
export class RightsModule { }
