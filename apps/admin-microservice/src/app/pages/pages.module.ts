import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { PagesClientsController } from './pages.client.controller';
import { ProvidersModule } from '@cnbc-monorepo/providers';

@Module({
	imports: [ProvidersModule],
	controllers: [PagesController, PagesClientsController],
	providers: [PagesService]
})
export class PagesModule { }
