import {
	CreateMarketRequestDto,
	CreateMarketResponseDto, GetMarketByIdResponseDto, UpdateMarketRequestDto
} from '@cnbc-monorepo/dtos';
import {
	Body, Controller,
	Get, Param, ParseIntPipe, Patch, Post
} from '@nestjs/common';
import { MarketsService } from './markets.service';

@Controller('news/api/admin/markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Get('/getAll')
  findAll() {
    return this.marketsService.findAll();
  }

  @Get('/getById/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<GetMarketByIdResponseDto> {
    return this.marketsService.findOne(id);
  }

  @Post('/create')
  create(
    @Body() createMarketRequestDto: CreateMarketRequestDto
  ): Promise<CreateMarketResponseDto> {
    return this.marketsService.create(createMarketRequestDto);
  }

  @Patch('/update/:id')
  update(@Param('id', ParseIntPipe) marketId: number, @Body() updateMarketRequestDto: UpdateMarketRequestDto) {
    return this.marketsService.update(marketId, updateMarketRequestDto);
  }
	

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.marketsService.remove(+id);
  // }
}
