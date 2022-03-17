import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule,
  ]
})
export class AdminModule { }
