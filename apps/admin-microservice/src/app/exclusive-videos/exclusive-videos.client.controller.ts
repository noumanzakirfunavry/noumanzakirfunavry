import { Public } from '@cnbc-monorepo/auth-module';
import { GetAllExclusiveVideosResponseDto, GetExclusiveVideoByIdResponseDto } from '@cnbc-monorepo/dtos';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ExclusiveVideosService } from './exclusive-videos.service';

@Public()
@Controller('admin/api/client/exclusive-videos')
export class ExclusiveVideosClientController {
	constructor(
		private exclusiveVideosService: ExclusiveVideosService
	) { }

	@Get('/getAll')
	getAll(): Promise<GetAllExclusiveVideosResponseDto> {
		return this.exclusiveVideosService.getAllExclusiveVideos();
	}

	@Get('/getById/:id')
	getById(@Param('id', ParseIntPipe) id: number): Promise<GetExclusiveVideoByIdResponseDto> {
		return this.exclusiveVideosService.getExclusiveVideoById(id);
	}

}
