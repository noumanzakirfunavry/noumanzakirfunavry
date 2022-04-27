import {
	GenericResponseDto,
	GetNewsByFlagsRequestDto,
	GetNewsByIdResponseDto,
	PaginatedRequestDto,
	SearchNewsRequestDto
} from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { BreakingNews, News, NewsVisitors, Users } from '@cnbc-monorepo/entity';
import {
	CustomException,
	Exceptions,
	ExceptionType
} from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class NewsService {
	constructor(
		@Inject('NEWS_REPOSITORY')
		private newsRepository: typeof News,

		@Inject('NEWS_VISITORS_REPOSITORY')
		private newsVisitorsRepository: typeof NewsVisitors,

		private helperService: Helper
	) { }

	async getNewsById(id: number, req): Promise<GetNewsByIdResponseDto> {
		console.log("🚀 ~ file: news.service.ts ~ line 28 ~ NewsService ~ getNewsById ~ req", req.ip)
		const news_exists = await this.newsExists(id);
		if (news_exists) {
			// extract ip address from request
			const ipAddress = this.helperService.extractIP(req);
			// find newsVisitor having this ip address who has already visited this news
			this.newsVisitorsRepository.findOne({ where: { ipAddress, newsId: id } }).then(res => {
				if (res) {
					// if found then update counter
					this.newsVisitorsRepository.update({ ...res, visitDate: new Date().toDateString(), count: res.count + 1 }, { where: { ipAddress, newsId: id } })
				} else {
					// if not found then create new entry
					this.newsVisitorsRepository.create({ ipAddress, visitDate: new Date().toDateString(), count: 1, newsId: id })
				}
			})
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
			sort: "updatedAt:desc",
			track_scores: true,
			query: {

				bool: {
					must: [{
						match: {
							categories: categoryId,
						}
					}, { match: { isActive: true } }],
					must_not: [{ exists: { field: "deletedAt" } }]
				}

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
			sort: "updatedAt:desc",
			query: {
				bool: {
					must: [...filtersArray, { match: { isActive: true } }],
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
			sort: "updatedAt:desc",
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
				isActive: true
			},
		});
	}

	async getMostReadNews(paginationDto: PaginatedRequestDto): Promise<GenericResponseDto> {
		const mostReadNews = await this.newsVisitorsRepository.findAll({
			attributes: [

				[sequelize.fn('sum', sequelize.col('count')), 'Visits'],

			],
			where: {
				visitDate: {
					// only count visits from last 7 days
					[Op.gt]: new Date(new Date().setDate(new Date().getDate() - 7)),
				},
			},
			include: ['news'],
			group: [sequelize.col('news.id')],
			order: [[sequelize.col('Visits'), 'DESC']],
			limit: parseInt(paginationDto.limit.toString()),
			offset: this.helperService.offsetCalculator(paginationDto.pageNo, paginationDto.limit),
		});

		return new GenericResponseDto(HttpStatus.OK, 'Request Successful', mostReadNews)
	}
}