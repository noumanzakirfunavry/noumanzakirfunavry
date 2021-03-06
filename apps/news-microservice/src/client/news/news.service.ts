import {
	GenericResponseDto,
	GetMostReadNewsDto,
	GetNewsByFlagsRequestDto,
	GetNewsByIdResponseDto,
	PaginatedRequestDto,
	SearchNewsRequestDto
} from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { BreakingNews, Categories, News, NewsVisitors, Users } from '@cnbc-monorepo/entity';
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
			const update_total_count = await this.updateTotalCountQuery(news_exists)
			if (update_total_count) {
				return new GetNewsByIdResponseDto(
					HttpStatus.OK,
					'News fetched successfully',
					news_exists
				);
			}
		} else {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			);
		}
	}

	private async updateTotalCountQuery(news_exists: News) {
		return await this.newsRepository.update({ totalViews: news_exists.totalViews + 1 }, {
			where: {
				id: news_exists.id
			}
		});
	}

	elkGetNewsByCategory(categoryId: number, paginationDTO: PaginatedRequestDto) {
		return ElkService.search({
			index: process.env.ELK_INDEX,
			from: paginationDTO.pageNo - 1,
			size: paginationDTO.limit,
			sort: "updatedAt:desc",
			track_scores: true,
			query: {

				bool: {
					must: [{
						match: {
							"categories.id": categoryId,
						}
					}, { match: { isActive: true } }],
					must_not: [
						{ exists: { field: "deletedAt" } },
						{ exists: { field: "categories.deletedAt" } }
					]
				}

			},
		});
	}

	// * This method acts as getAllNews when no flag is given
	async elkGetNewsByFlags(getNewsByFlagsRequestDto: GetNewsByFlagsRequestDto) {
		const { isExclusiveVideos, isBreaking, isFeatured, isTrending, isEditorsChoice, contentType } = getNewsByFlagsRequestDto

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

		if (isExclusiveVideos !== undefined) {
			filtersArray.push({
				match: {
					isExclusiveVideos
				}
			})
		}

		if (contentType !== undefined) {
			filtersArray.push({
				match: {
					contentType
				}
			})
		}

		return ElkService.search({
			index: process.env.ELK_INDEX,
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
		const { title, content, tags, quotes, searchTerm } = searchNewsRequestDto;

		const shouldArray = [];


		if (title) {
			shouldArray.push({
				query_string: {
					default_field: 'title',
					query: title,
				},
			});
		}

		if (content) {
			shouldArray.push({
				query_string: {
					default_field: 'content',
					query: content,
				},
			});
		}

		if (tags?.length > 0) {
			shouldArray.push({
				query_string: {
					default_field: 'tags',
					query: tags[0],
				},
			});
		}

		if (quotes?.length > 0) {
			shouldArray.push({
				query_string: {
					default_field: 'quotes',
					query: quotes[0],
				},
			});
		}

		if (searchTerm) {
			shouldArray.push({
				multi_match: {
					query: searchTerm
				}
			});
		}

		return ElkService.search({
			index: process.env.ELK_INDEX,
			sort: "updatedAt:desc",
			track_scores: true,
			query: {
				bool: {
					should: shouldArray
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

	async getMostReadNews(getMostReadNewsDto: GetMostReadNewsDto): Promise<GenericResponseDto> {
		const { contentType } = getMostReadNewsDto
		const mostReadNews = await this.newsVisitorsRepository.findAll({
			where: {
				visitDate: {
					// only count visits from last 7 days
					[Op.gt]: new Date(new Date().setDate(new Date().getDate() - 7)),
				},
			},
			attributes: {
				include: [

					[sequelize.fn('sum', sequelize.col('count')), 'Visits'],

				],
				exclude: ['id']
			},

			include: [{
				model: News,
				where: {
					...(contentType && { contentType })
				},
				required: true,
				duplicating: false,
				include: [
					'video',
					'image',
					'thumbnail',
					{
						model: Categories,
						required: true,
						duplicating: false,
						through: {
							attributes: []
						}
					}]
			}],
			group: [
				sequelize.col('news.id'), 
				sequelize.col('NewsVisitors.id'), 
				sequelize.col('news->categories.id'), 
				sequelize.col('news->video.id'), 
				sequelize.col('news->image.id'), 
				sequelize.col('news->thumbnail.id')
			],
			order: [[sequelize.col('Visits'), 'DESC']],
			limit: getMostReadNewsDto.limit,
			offset: this.helperService.offsetCalculator(getMostReadNewsDto.pageNo, getMostReadNewsDto.limit),
		});

		return new GenericResponseDto(HttpStatus.OK, 'Request Successful', mostReadNews)
	}
}
