import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
  imports : [
    UtilityModule,
    ProvidersModule
  ]
})
export class MessagesModule {}
