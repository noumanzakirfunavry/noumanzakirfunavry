import { DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllNewsRequestDto, GetNewsByIdResponseDto } from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { Attachments, BreakingNews, Categories, EditorsChoiceNews, ExclusiveVideos, FeaturedNews, News, NewsHasCategories, NewsHasQuotes, NewsHasTags, SeoDetails, TrendingNews, Users } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { literal, Op, where } from 'sequelize';


@Injectable()
export class NewsService {
	constructor(
		private helperService: Helper,
		@Inject('NEWS_REPOSITORY')
		private newsRepository: typeof News,
		@Inject('NEWS_HAS_TAGS_REPOSITORY')
		private newsHasTags: typeof NewsHasTags,
		@Inject('NEWS_HAS_QUOTES_REPOSITORY')
		private newsHasQuotes: typeof NewsHasQuotes,
		@Inject('NEWS_HAS_CATEGORIES_REPOSITORY')
		private newsHasCategories: typeof NewsHasCategories,
		@Inject('SEO_DETAILS_REPOSITORY')
		private seoRepository: typeof SeoDetails,
		@Inject('BREAKING_NEWS_REPOSITORY')
		private breakingNewsRepo: typeof BreakingNews,
		@Inject('FEATURED_NEWS_REPOSITORY')
		private featuredNews: typeof FeaturedNews,
		@Inject('EDITORS_CHOICE_NEWS_REPOSITORY')
		private editorChoiceRepo: typeof EditorsChoiceNews,
		@Inject('TRENDING_NEWS_REPOSITORY')
		private trendingRepo: typeof TrendingNews,
		@Inject('EXCLUSIVE_VIDEOS_REPOSITORY')
		private exclusiveRepo: typeof ExclusiveVideos
	) { }
	async addNews(body: any, userId: number): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				const seo_added = await this.addSeo(body, transactionHost)
				if (seo_added) {
					const news_object = this.helperService.newsObjectCreator(body, seo_added.id, userId)
					const news_added = await this.createNews(news_object, transactionHost)
					if (news_added) {
						const add_news_categories = await this.addCategoriesToNews(body.categoryIds, news_added.id, transactionHost)
						if (add_news_categories) {
							if (body.tagsIds && body.tagsIds.length !== 0) {
								const news_tags = await this.addNewsTags(body.tagsIds, news_added.id, transactionHost)
								if (!news_tags) {
									throw new CustomException(
										Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
										Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
									)
								}
							}
							if (body.quotes && body.quotes.length !== 0) {
								const news_quotes = await this.addNewsQuotes(body.quotes, news_added.id, transactionHost)
								if (!news_quotes) {
									throw new CustomException(
										Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
										Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
									)
								}
							}

							// let { tags, quotes, categories, deletedAt, ...news } = await (await this.newsRepository.findOne({ where: { id: news_added.id }, include: ['tags', 'quotes', { model: Attachments, as: 'image' }, { model: Attachments, as: 'video' }, { model: Attachments, as: 'thumbnail' }, { model: Categories, attributes: ['id'] }], transaction: transactionHost.transaction })).toJSON()

							// tags = tags.map(tag => tag.title);
							// quotes = quotes.map(quote => quote.name);
							// categories = categories.map(category => category.id);

							// save to elk
							// ElkService.save({ index: 'news', id: news_added.id.toString(), document: { ...news, tags, quotes, categories } });

							return new GenericResponseDto(
								HttpStatus.CREATED,
								"News added successfully"
							)
						}
						else {
							throw new CustomException(
								Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
								Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
							)
						}
					}
					else {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
							Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
						)
					}
				}
				else {
					throw new CustomException(
						Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
						Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
					)
				}

			})
		}
		catch (err) {
			console.log("🚀 ~ file: news.service.ts ~ line 12 ~ NewsService ~ addNews ~ err", err)
			throw err;
		}
	}

	private async createNews(news_object: { newsType: string; showOnHomePage: boolean; isActive: boolean; seoDetailId: number; publishedBy: number; twitterLink: string; facebookLink: string; authorName: string; imageId: number; thumbnailId: number; videoId: number; title: string; content: string; isPro: boolean; visible: boolean; contentType: string; }, transactionHost) {
		return await this.newsRepository.create(news_object, transactionHost);
	}

	private async addSeo(body: any, transactionHost) {
		return await this.seoRepository.create(body.seoDetails, transactionHost);
	}
	private async addCategoriesToNews(categoryIds: [], newsId: number, transactionHost) {
		let category_added;
		let category_object;
		for (let i = 0; i < categoryIds.length; i++) {
			category_object = this.helperService.categoryObject(categoryIds[i], newsId)
			category_added = await this.newsHasCategories.create(category_object, transactionHost)
			if (!category_added) {
				return false
			}
		}
		return true
	}
	private async addNewsTags(tagsIds: [], newsId: number, transactionHost) {
		let tags_added;
		let tags_object;
		for (let i = 0; i < tagsIds.length; i++) {
			tags_object = this.helperService.tagsObject(tagsIds[i], newsId)
			tags_added = await this.newsHasTags.create(tags_object, transactionHost)
			if (!tags_added) {
				return false
			}
		}
		return true
	}
	private async addNewsQuotes(quotes, newsId: number, transactionHost) {
		let quotes_added;
		let quotes_object;
		for (let i = 0; i < quotes.length; i++) {
			quotes_object = this.helperService.quotesObject(quotes[i], newsId)
			quotes_added = await this.newsHasQuotes.create(quotes_object, transactionHost)
			if (!quotes_added) {
				return false
			}
		}
		return true
	}

	async updateNews(body: any, newsId: number, userId: number): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				const seo_updated = await this.updateSeo(body, transactionHost)
				if (seo_updated) {
					const news_object = this.helperService.newsObjectCreator(body, body.seoDetails.id, userId)
					const news_updated = await this.updateNewsQuery(news_object, newsId, transactionHost)
					if (news_updated) {
						const delete_news_categories = await this.deletePreviousCategories(newsId, transactionHost)
						if (delete_news_categories) {
							const add_news_categories = await this.addCategoriesToNews(body.categoryIds, newsId, transactionHost)
							if (add_news_categories) {
								if (body.tagsIds && body.tagsIds.length !== 0) {
									const delete_news_tags = await this.deletePreviousNewsTags(newsId, transactionHost)
									if (delete_news_tags) {
										const news_tags = await this.addNewsTags(body.tagsIds, newsId, transactionHost)
										if (!news_tags) {
											throw new CustomException(
												Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
												Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
											)
										}
									}
									else {
										throw new CustomException(
											Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
											Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
										)
									}
								}
								if (body.quotes && body.quotes.length !== 0) {
									const delete_news_quotes = await this.deletePreviousQuotes(newsId, transactionHost)
									if (delete_news_quotes) {
										const news_quotes = await this.addNewsQuotes(body.quotes, newsId, transactionHost)
										if (!news_quotes) {
											throw new CustomException(
												Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
												Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
											)
										}
									}
									else {
										throw new CustomException(
											Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
											Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
										)
									}
								}


								// let { tags, quotes, categories, ...news } = await (await this.newsRepository.findOne({ where: { id: newsId }, include: ['tags', 'quotes', { model: Attachments, as: 'image' }, { model: Attachments, as: 'video' }, { model: Attachments, as: 'thumbnail' }, { model: Categories, attributes: ['id'] }], transaction: transactionHost.transaction })).toJSON()

								// tags = tags.map(tag => tag.title);
								// quotes = quotes.map(quote => quote.name);
								// categories = categories.map(category => category.id);

								// ElkService.update({ id: newsId.toString(), index: 'news', doc: { ...news, tags, quotes, categories } })
								return new GenericResponseDto(
									HttpStatus.OK,
									"News updated successfully"
								)
							}
							else {
								throw new CustomException(
									Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
									Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
								)
							}
						}
						else {
							throw new CustomException(
								Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
								Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
							)
						}
					}
					else {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
							Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
						)
					}
				}
				else {
					throw new CustomException(
						Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
						Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
					)
				}

			})
		}
		catch (err) {
			console.log("🚀 ~ file: news.service.ts ~ line 12 ~ NewsService ~ addNews ~ err", err)
			throw err;
		}
	}
	async getAllNews(query: GetAllNewsRequestDto): Promise<GenericResponseDto> {
		try {
			const response = await this.getAllNewsQuery(query)
			return new GenericResponseDto(
				HttpStatus.OK,
				"News fectched successfully",
				{
					news: response.rows,
					totalCount: response.count
				}
			)
		}
		catch (err) {
			console.log("🚀 ~ file: news.service.ts ~ line 227 ~ NewsService ~ getAllNews ~ err", err)
			throw err
		}
	}

	private async getAllNewsQuery(query: GetAllNewsRequestDto) {
		console.log("🚀 ~ file: news.service.ts ~ line 278 ~ NewsService ~ getAllNewsQuery ~ query", query)

		return await this.newsRepository.findAndCountAll({
			include: [{
				model: Categories,
				where: {
					...(query.categoryId && {
						id: query.categoryId
					})
				}

			},
			{
				model: Users
			},
			{
				model: NewsHasQuotes
			},
			{
				model: Attachments,
				as: 'image'
			},
			{
				model: Attachments,
				as: 'thumbnail'
			},
			{
				model: Attachments,
				as: 'video'
			},
			],
			where: {
				...(query.search && {
					title: {
						[Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
					}
				}),
				...(query.isActive && {
					isActive: JSON.parse(query.isActive.toString())
				}),
				...(query.newsType && {
					newsType: query.newsType
				}),
				...(query.publishedBy && {
					publishedBy: query.publishedBy
				}),
				...(query.date && {
					createdAt: where(sequelize.fn('date', sequelize.col('News.createdAt')), '=', query.date)
				})

			},
			limit: parseInt(query.limit.toString()),
			offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
		});
	}

	private async deletePreviousQuotes(newsId: number, transactionHost: any) {
		const response = await this.newsHasQuotes.destroy({
			where: {
				newsId: newsId
			},
			transaction: transactionHost.transaction
		});
		return response === 0 ? true : response
	}
	private async deletePreviousNewsTags(newsId: number, transactionHost: any) {
		const response = await this.newsHasTags.destroy({
			where: {
				newsId: newsId
			},
			transaction: transactionHost.transaction
		});
		return response === 0 ? true : response
	}

	private async deletePreviousCategories(newsId: number, transactionHost) {
		const response = await this.newsHasCategories.destroy({
			where: {
				newsId: newsId
			},
			transaction: transactionHost.transaction
		});
		return response === 0 ? true : response
	}

	private async updateNewsQuery(news_object: { newsType: string; showOnHomePage: boolean; isActive: boolean; seoDetailId: number; publishedBy: number; twitterLink: string; facebookLink: string; authorName: string; imageId: number; thumbnailId: number; videoId: number; title: string; content: string; isPro: boolean; visible: boolean; contentType: string; }, newsId: number, transactionHost) {
		return await this.newsRepository.update(news_object, {
			where: {
				id: newsId
			},
			transaction: transactionHost.transaction
		});
	}

	private async updateSeo(body: any, transactionHost) {
		return await this.seoRepository.update(body.seoDetails, {
			where: {
				id: body.seoDetails.id
			},
			transaction: transactionHost.transaction
		});
	}
	async deleteNews(body: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
		return await sequelize.transaction(async t => {
			let delete_news;
			let news_exists;
			const transactionHost = { transaction: t };
			for (let i = 0; i < body.id.length; i++) {
				news_exists = await this.newsExists(body.id[i]);
				if (news_exists) {
					delete_news = await this.deleteNewsRecord(body, i, transactionHost)
					if (!delete_news) {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
							Exceptions[ExceptionType.UNABLE_TO_DELETE].status
						)
					}
					else {
						const delete_seo_details = await this.deleteSeoDetailsQuery(news_exists, transactionHost)
						if (!delete_seo_details) {
							throw new CustomException(
								Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
								Exceptions[ExceptionType.UNABLE_TO_DELETE].status
							)
						}
						else {
							const delete_news_categories = await this.deletePreviousCategories(body.id[i], transactionHost)
							if (!delete_news_categories) {
								throw new CustomException(
									Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
									Exceptions[ExceptionType.UNABLE_TO_DELETE].status
								)
							}
							else {
								const delete_news_tags = await this.deletePreviousNewsTags(body.id[i], transactionHost)
								if (!delete_news_tags) {
									throw new CustomException(
										Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
										Exceptions[ExceptionType.UNABLE_TO_DELETE].status
									)
								}
								else {
									const delete_news_quotes = await this.deletePreviousQuotes(body.id[i], transactionHost)
									if (!delete_news_quotes) {
										throw new CustomException(
											Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
											Exceptions[ExceptionType.UNABLE_TO_DELETE].status
										)
									}
									else {
										const delete_feature = await this.genericNewsDeletionMethod(FeaturedNews, body, i)
										if (!delete_feature) {
											throw new CustomException(
												Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
												Exceptions[ExceptionType.UNABLE_TO_DELETE].status
											)
										}
										else {
											const delete_trending = this.genericNewsDeletionMethod(TrendingNews, body, i)
											if (!delete_trending) {
												throw new CustomException(
													Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
													Exceptions[ExceptionType.UNABLE_TO_DELETE].status
												)
											}
											else {
												const delete_editorschoicenews = this.genericNewsDeletionMethod(EditorsChoiceNews, body, i)
												if (!delete_editorschoicenews) {
													throw new CustomException(
														Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
														Exceptions[ExceptionType.UNABLE_TO_DELETE].status
													)
												}
												else {
													const delete_breakingnews = this.genericNewsDeletionMethod(BreakingNews, body, i)
													if (!delete_breakingnews) {
														throw new CustomException(
															Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
															Exceptions[ExceptionType.UNABLE_TO_DELETE].status
														)
													}
												}
											}
										}
									}
								}
							}
						}
					}
					ElkService.update({
						index: 'news',
						id: body.id[i],
						doc: {
							deletedAt: new Date().toISOString()
						}

					})
				}
				else {
					throw new CustomException(
						Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
						Exceptions[ExceptionType.RECORD_NOT_FOUND].status
					)
				}
			}
			return new GenericResponseDto(
				HttpStatus.OK,
				"Deleted successfully"
			)
		})
	}
	private async genericNewsDeletionMethod(entity, body: DeleteAlexaAudioRequestDto, i: number) {
		const response = await sequelize.getRepository(entity).destroy({
			where: {
				newsId: body.id[i]
			}
		});
		return response === 0 ? true : response
	}

	private async deleteSeoDetailsQuery(news_exists: any, transactionHost) {
		return await this.seoRepository.destroy({
			where: {
				id: news_exists.seoDetailId
			},
			transaction: transactionHost.transaction
		});
	}


	private async deleteNewsRecord(body: DeleteAlexaAudioRequestDto, i: number, transactionHost) {
		return await this.newsRepository.destroy(
			{
				where: {
					id: body.id[i]
				},
				transaction: transactionHost.transaction,
				individualHooks: true
			});
	}

	async newsExists(id: number) {
		return await this.newsRepository.findOne({
			include: ['tags', 'categories', 'seoDetail', 'image', 'thumbnail', 'video', {
				model: Users
			},
			{
				model : NewsHasQuotes
			}
		],
			where: {
				id: id
			}
		});
	}
	async getNewsById(id: number): Promise<GetNewsByIdResponseDto> {
		const news_exists = await this.newsExists(id)
		if (news_exists) {
			return new GetNewsByIdResponseDto(
				HttpStatus.OK,
				"News fetched successfully",
				news_exists
			)
		}
		else {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
	}
	async getNewsStatusById(id: number) {
		let resObj = {}
		const isNews = await this.newsRepository.findOne({ where: { id } })
		if (!isNews) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
		resObj["newsId"] = isNews.id

		const isBreakingNews = await this.breakingNewsRepo.findOne({ where: { newsId: isNews.id } })
		if (isBreakingNews) { resObj['isBreakingNews'] = true }
		else { resObj['isBreakingNews'] = false }

		const isFeaturedNews = await this.featuredNews.findOne({ where: { newsId: isNews.id } })
		if (isFeaturedNews) { resObj['isFeaturedNews'] = true }
		else { resObj['isFeatureNews'] = false }

		const isEditorChoice = await this.editorChoiceRepo.findOne({ where: { newsId: isNews.id } })
		if (isEditorChoice) { resObj['isEditorChoice'] = true }
		else { resObj['isEditorChoice'] = false }

		const isTrendingNews = await this.trendingRepo.findOne({ where: { newsId: isNews.id } })
		if (isTrendingNews) { resObj['isTrending'] = true }
		else { resObj['isTrending'] = false }

		const isExclusiveNews = await this.exclusiveRepo.findOne({ where: { newsId: isNews.id } })
		if (isExclusiveNews) { resObj['isExclusive'] = true }
		else { resObj['isExclusive'] = false }

		return new GenericResponseDto(HttpStatus, "News Status", resObj)

	}
	isObjectEmpty(object) {
		return (
			Object.prototype.toString.call(object) === '[object Object]' &&
			JSON.stringify(object) === '{}'
		);
	}

}
