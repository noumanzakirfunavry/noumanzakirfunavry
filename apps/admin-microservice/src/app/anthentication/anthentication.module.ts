import { Module } from '@nestjs/common';
import { AnthenticationController } from './anthentication.controller';
import { AnthenticationService } from './anthentication.service';
import { ProvidersModule } from '@cnbc-monorepo/providers'
import { AuthModuleModule } from '@cnbc-monorepo/auth-module'
import { UtilityModule } from '@cnbc-monorepo/utility';
import { MailModule, MailService } from '@cnbc-monorepo/mail';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AnthenticationController],
  providers: [
    AnthenticationService,
    MailService,
  ],
  imports: [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    MailModule,
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: 60,
        limit: 10,
      }),
    }),
  ],
  
})
export class AnthenticationModule { }
