import { DailymotionUploadRequests } from '@cnbc-monorepo/entity';
import {
	Body,
	Controller, Post
} from '@nestjs/common';
import { DailymotionService } from './dailymotion.service'

@Controller('dailymotion')
export class DailymotionController {
	constructor(private dailymotionUploadService: DailymotionService) { }

	@Post('/upload')
	async uploadToDailymotion(@Body() dailymotionRequestDto: DailymotionUploadRequests){
		// start upload process synchronously and return void
		this.dailymotionUploadService.uploadToDailymotion(dailymotionRequestDto)
		return
	}

}
