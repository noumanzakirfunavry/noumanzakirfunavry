import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';

@Module({
	imports: [ProvidersModule, UtilityModule],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
