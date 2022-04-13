import {
	GetNewsByFlagsRequestDto,
	GetNewsByIdResponseDto,
	PaginatedRequestDto,
	SearchNewsRequestDto
} from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { BreakingNews, News, Users } from '@cnbc-monorepo/entity';
import {
	CustomException,
	Exceptions,
	ExceptionType
} from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class NewsService {
	constructor(
		@Inject('NEWS_REPOSITORY')
		private newsRepository: typeof News
	) { }

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

	elkGetNewsByCategory(categoryId: number, paginationDTO: PaginatedRequestDto) {
		return ElkService.search({
			index: 'news',
			from: paginationDTO.pageNo - 1,
			size: paginationDTO.limit,
			query: {
				match: {
					categoryIds: categoryId,
				},
			},
		});
	}

	async elkGetNewsByFlags(getNewsByFlagsRequestDto: GetNewsByFlagsRequestDto) {
		const { isBreaking, isFeatured, isTrending, isEditorsChoice } = getNewsByFlagsRequestDto

		// breaking news will be fetched through DB, others will be fetched ELK
		if (isBreaking !== undefined) {
			return this.newsRepository.findAll({
				include: [{
					model: BreakingNews, where: {
						createdAt: {
							[Op.gte]: new Date(Date.now() - 30 * 60 * 1000)
						}
					}
				}]
			})
		}

		const filtersArray = []

		if (isFeatured !== undefined) {
			filtersArray.push({
				match: {
					isFeatured
				}
			})
		}
		if (isTrending !== undefined) {
			filtersArray.push({
				match: {
					isTrending
				}
			})
		}
		if (isEditorsChoice !== undefined) {
			filtersArray.push({
				match: {
					isEditorsChoice
				}
			})
		}

		return ElkService.search({
			index: 'news',
			from: getNewsByFlagsRequestDto.pageNo - 1,
			size: getNewsByFlagsRequestDto.limit,
			sort: 'updatedAt',
			query: {
				bool: {
					must: filtersArray,
					must_not: [{ exists: { field: "deletedAt" } }]
				}
			}
		})
	}

	// ! find a way to use the DTO directly
	elkSearchNews(searchNewsRequestDto: SearchNewsRequestDto) {
		const { title, content, tags, quotes } = searchNewsRequestDto;

		// const query = {
		// 	match: {},
		// 	terms: {}
		// };

		// // title ? match[title] : null

		// for (const key of Object.keys(searchNewsRequestDto)) {
		//   if (typeof searchNewsRequestDto[key] === 'string') {
		//     query.match[key] = searchNewsRequestDto[key];
		//   } else if(Array.isArray(searchNewsRequestDto[key])) {
		// 		match
		// 	}
		// }

		const mustArray = [];

		// const query = {
		//   bool: {
		//     must: [],
		//   },
		// } as QueryDslQueryContainer;

		if (title) {
			mustArray.push({
				query_string: {
					default_field: 'title',
					query: title,
				},
			});
		}

		if (content) {
			mustArray.push({
				query_string: {
					default_field: 'content',
					query: content,
				},
			});
		}

		if (tags?.length > 0) {
			mustArray.push({
				query_string: {
					default_field: 'tags',
					query: tags[0],
				},
			});
		}

		if (quotes?.length > 0) {
			mustArray.push({
				query_string: {
					default_field: 'quotes',
					query: quotes[0],
				},
			});
		}

		return ElkService.search({
			index: 'news',
			query: {
				bool: {
					must: mustArray
				}
			},
		});
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
