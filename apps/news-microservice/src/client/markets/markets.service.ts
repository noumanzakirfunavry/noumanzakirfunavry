import { GetAllMarketsResponseDto } from '@cnbc-monorepo/dtos';
import { Markets } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MarketsService {
  constructor(
    @Inject('MARKETS_REPOSITORY')
    private marketsRepo: typeof Markets
  ) {}

  async getAll(): Promise<GetAllMarketsResponseDto> {
    const markets = await this.marketsRepo.findAll({
      where: { isVisible: true },
      order: ['orderNo'],
    });

    if (markets.length === 0) {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }
    return new GetAllMarketsResponseDto(
      HttpStatus.OK,
      'Request Successful',
      markets
    );
  }
}
