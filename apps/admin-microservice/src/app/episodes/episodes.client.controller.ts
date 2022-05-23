import { Public } from '@cnbc-monorepo/auth-module';
import { GetAllEpisodesRequestDto } from '@cnbc-monorepo/dtos';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('admin/api/client/episodes')
@Public()
export class EpisodesClientController {
	constructor(
		private episodesService: EpisodesService
	) { }

	@Get('/getAll')
	getAllEpisodesClient(@Query() getAllEpisodesDto: GetAllEpisodesRequestDto) {
		return this.episodesService.getAllEpisodesClient(getAllEpisodesDto);
	}

	@Get('/getById/:id')
	async getEpisodeByIdClient(@Param('id', ParseIntPipe) id: number) {
		return this.episodesService.getEpisodeByIdClient(id);
	} 

}
