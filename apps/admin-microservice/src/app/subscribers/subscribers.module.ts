import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { SubscribersClientController } from './subscribers.client.controller';
import { SubscribersController } from './subscribers.controller';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [ProvidersModule, UtilityModule, AuthModuleModule],
  controllers: [SubscribersClientController, SubscribersController],
  providers: [SubscribersService],
})
export class SubscribersModule {}
