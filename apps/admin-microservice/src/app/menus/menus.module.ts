import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { MenusClientController } from './menus.client.controller';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';

@Module({
  imports: [ProvidersModule, UtilityModule],
  controllers: [MenusController, MenusClientController],
  providers: [MenusService],
})
export class MenusModule {}
