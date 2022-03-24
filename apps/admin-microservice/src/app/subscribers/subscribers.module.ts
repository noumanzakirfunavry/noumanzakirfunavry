import { ProvidersModule } from '@cnbc-monorepo/providers';
import { Module } from '@nestjs/common';
import { SubscribersClientController } from './subscribers.client.controller';
import { SubscribersController } from './subscribers.controller';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [ProvidersModule],
  controllers: [SubscribersClientController, SubscribersController],
  providers: [SubscribersService],
})
export class SubscribersModule {}
