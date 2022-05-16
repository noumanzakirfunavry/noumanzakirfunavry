import { Public } from '@cnbc-monorepo/auth-module';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProgramsService } from './programs.service';

@Controller('admin/api/client/programs')
@Public()
export class ProgramsClientController {
	constructor(private readonly programsService: ProgramsService) { }

	@Get('/getAll')
	getAllEpisodesClient() {
		return this.programsService.getAllProgramsClient();
	}

	@Get('/getById/:id')
	async getEpisodeByIdClient(@Param('id', ParseIntPipe) id: number) {
		return this.programsService.getProgramByIdClient(id);
	} 

}
