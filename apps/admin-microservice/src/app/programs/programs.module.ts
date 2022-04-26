import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';

@Module({
  imports : [
    ProvidersModule,
    UtilityModule,
    ExceptionHandlingModule,
  ],
  controllers: [ProgramsController],
  providers: [ProgramsService]
})
export class ProgramsModule {}
