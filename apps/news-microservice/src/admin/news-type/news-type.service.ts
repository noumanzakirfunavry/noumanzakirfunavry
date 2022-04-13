import { GenericResponseDto } from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class NewsTypeService {
	constructor(
		private helperService: Helper
	) { }

	async getAllNews(entity) {
		return await sequelize.getRepository(entity).findAll({
			include: ['news']
		}
		)
	}
	async updateNews(entity, body, userId) {

		return await sequelize.transaction(async t => {
			const transactionHost = { transaction: t };
			let itemsBeforeDelete: any = await sequelize.getRepository(entity).findAll({ attributes: ['id', 'newsId'], raw: true, nest: true,transaction:transactionHost.transaction })
            console.log("🚀 ~ file: news-type.service.ts ~ line 24 ~ NewsTypeService ~ updateNews ~ itemsBeforeDelete", itemsBeforeDelete)
			const delete_previous = await this.deletePreviousNews(entity, transactionHost)
            console.log("🚀 ~ file: news-type.service.ts ~ line 26 ~ NewsTypeService ~ updateNews ~ delete_previous", delete_previous)
			if (delete_previous) {
				body = this.helperService.addUser(body, userId)
				let addNews;
				for (let i = 0; i < body.news.length; i++) {
					addNews = await this.addNews(addNews, entity, body, i, transactionHost);
					if (!addNews) {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
							Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
						)
					}
				}
				const itemsAfterDelete: any = await sequelize.getRepository(entity).findAll({ attributes: ['id', 'newsId'], raw: true, nest: true ,transaction:transactionHost.transaction })

				// First Loop To Create Dictionary
				let itemDictionary = {};
				itemsBeforeDelete.forEach(item => {
					itemDictionary[item.newsId] = 1;
				})
				itemsAfterDelete.forEach(item => {
					itemDictionary[item.newsId] = 2;
				});
				let itemsToFlag = [];
				let itemsToDeflag = [];

				let elkUpdateArray = [];

				for (const item in itemDictionary) {
					if (itemDictionary[item] === 2) {
						itemsToFlag.push(item)
					} else {
						itemsToDeflag.push(item)
					}
				}

				let flag;

				itemsToFlag.forEach(item => {
					if (entity.prototype.constructor.name === "TrendingNews") {
						flag = 'isTrending'
					} else if (entity.prototype.constructor.name === "EditorsChoiceNews") {
						flag = 'isEditorsChoice'
					} else if (entity.prototype.constructor.name === "FeaturedNews") {
						flag = 'isFeatured'
					}

					elkUpdateArray.push({
						update: {
							_index: 'news',
							_id: item,
						}
					},
						{
							doc: {
								[flag]: true
							}
						})
				})

				itemsToDeflag.forEach(item => {
					if (entity.prototype.constructor.name === "TrendingNews") {
						flag = 'isTrending'
					} else if (entity.prototype.constructor.name === "EditorsChoiceNews") {
						flag = 'isEditorsChoice'
					} else if (entity.prototype.constructor.name === "FeaturedNews") {
						flag = 'isFeatured'
					}

					elkUpdateArray.push({
						update: {
							_index: 'news',
							_id: item,
						}
					},
						{
							doc: {
								[flag]: false
							}
						})
				})

				ElkService.bulk({operations: elkUpdateArray})


				return new GenericResponseDto(
					HttpStatus.OK,
					"News updated successfully"
				)
			}
			else {
				throw new CustomException(
					Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
					Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
				)
			}
		})


	}

	private async addNews(addNews: any, entity: any, body: any, i: number, transactionHost) {
		addNews = await sequelize.getRepository(entity).create(body.news[i], transactionHost);
		return addNews;
	}

	private async deletePreviousNews(entity: any, transactionHost) {
		const response = await sequelize.getRepository(entity).destroy({
			where: {},
			truncate: true,
			transaction: transactionHost.transaction
		});
		return response === 0 ? true : response
	}
}
