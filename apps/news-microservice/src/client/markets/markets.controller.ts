import { Public } from '@cnbc-monorepo/auth-module';
import { GetAllMarketsResponseDto } from '@cnbc-monorepo/dtos';
import { Controller, Get } from '@nestjs/common';
import { MarketsService } from './markets.service';

@Controller('news/api/client/markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Public()
  @Get('/getAll')
  getAll(): Promise<GetAllMarketsResponseDto> {
    return this.marketsService.getAll();
  }
}
