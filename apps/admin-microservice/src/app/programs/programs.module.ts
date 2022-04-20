import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
	imports: [ProvidersModule],
  controllers: [ProgramsController],
  providers: [ProgramsService]
})
export class ProgramsModule {}
