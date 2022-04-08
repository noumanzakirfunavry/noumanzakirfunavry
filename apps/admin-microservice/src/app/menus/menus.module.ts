import { ElkModule } from '@cnbc-monorepo/elk';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { MenusClientController } from './menus.client.controller';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';

@Module({
  imports: [ProvidersModule, UtilityModule, ElkModule],
  controllers: [MenusController, MenusClientController],
  providers: [MenusService],
	exports: [MenusService]

})
export class MenusModule {}
