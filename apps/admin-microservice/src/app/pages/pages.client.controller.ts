import { Public } from '@cnbc-monorepo/auth-module';
import { Controller, Get } from '@nestjs/common';
import { PagesService } from './pages.service';

@Public()
@Controller('admin/api/client/pages')
export class PagesClientsController {
	constructor(private readonly pagesService: PagesService) { }

	@Get('/getAll')
	getAllPagesClient(){
		return this.pagesService.getAllClient();
	}
}
