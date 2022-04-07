import { GetNewsByIdResponseDto } from '@cnbc-monorepo/dtos';
import { News, Users } from '@cnbc-monorepo/entity';
import {
  CustomException,
  Exceptions,
  ExceptionType,
} from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  constructor(
    @Inject('NEWS_REPOSITORY')
    private newsRepository: typeof News
  ) {}

  async getNewsById(id: number): Promise<GetNewsByIdResponseDto> {
    const news_exists = await this.newsExists(id);
    if (news_exists) {
      return new GetNewsByIdResponseDto(
        HttpStatus.OK,
        'News fetched successfully',
        news_exists
      );
    } else {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }
  }

  async newsExists(id: number) {
    return await this.newsRepository.findOne({
      include: [
        'tags',
        'categories',
        'quotes',
        'seoDetail',
        'image',
        'thumbnail',
        'video',
        {
          model: Users,
        },
      ],
      where: {
        id: id,
      },
    });
  }
}
