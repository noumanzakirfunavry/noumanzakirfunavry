import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
	imports: [ProvidersModule],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
