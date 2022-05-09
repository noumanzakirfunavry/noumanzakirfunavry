import { Public } from '@cnbc-monorepo/auth-module';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('admin/api/client/episodes')
@Public()
export class EpisodesClientController {
	constructor(
		private episodesService: EpisodesService
	) { }

	@Get('/getAll')
	getAllEpisodesClient() {
		return this.episodesService.getAllEpisodesClient();
	}

	@Get('/getById/:id')
	async getEpisodeByIdClient(@Param('id', ParseIntPipe) id: number) {
		return this.episodesService.getEpisodeByIdClient(id);
	} 

}
