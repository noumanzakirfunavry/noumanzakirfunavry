import { Controller, Get } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('/client/pages')
export class PagesClientsController {
	constructor(private readonly pagesService: PagesService) { }

	@Get('/getAll')
	getAllPagesClient(){
		return this.pagesService.getAllClient();
	}
}
