import { CreateExclusiveVideosRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllExclusiveVideosResponseDto, GetExclusiveVideoByIdResponseDto, UpdateExclusiveVideosRequestDto } from '@cnbc-monorepo/dtos';
import { ExclusiveVideos } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ElkService } from '@cnbc-monorepo/elk';

@Injectable()
export class ExclusiveVideosService {
	constructor(
		private helperService: Helper,
		@Inject('EXCLUSIVE_VIDEOS_REPOSITORY')
		private exclusiveVideoRepository: typeof ExclusiveVideos,
	) { }
	async createExclusiveVideo(body: CreateExclusiveVideosRequestDto, transactionHost?): Promise<GenericResponseDto> {
		try {
			const create_exclusive = await this.createExclusiveVideoQuery(body, transactionHost)
			if (create_exclusive) {
				ElkService.update({
					id: body.newsId.toString(),
					index: 'news',
					doc: { isExclusiveVideos: true }
				})
				return new GenericResponseDto(
					HttpStatus.OK,
					"Created successfully"
				)
			}
			else {
				throw new CustomException(
					Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
					Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
				)
			}
		}
		catch (err) {
			console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 17 ~ ExclusiveVideosService ~ createExclusiveVideo ~ err", err)
			throw err
		}
	}
	async updateExclusiveVideo(body: CreateExclusiveVideosRequestDto, id: number): Promise<GenericResponseDto> {
		try {
			const exclusive_exists = await this.videoExists(id)
			if (exclusive_exists) {
				const update_exclusive = await this.updateExclusiveQuery(body, id)
				if (update_exclusive) {
					return new GenericResponseDto(
						HttpStatus.OK,
						"Updated successfully"
					)
				}
				else {
					throw new CustomException(
						Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
						Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
					)
				}
			}
			else {
				throw new CustomException(
					Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
					Exceptions[ExceptionType.RECORD_NOT_FOUND].status
				)
			}
		}
		catch (err) {
			console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 40 ~ ExclusiveVideosService ~ updateMessage ~ err", err)
			throw err
		}
	}
	async getAllExclusiveVideos(): Promise<GetAllExclusiveVideosResponseDto> {
		try {
			const results_array = await this.allVideosQuery()
			return new GetAllExclusiveVideosResponseDto(
				HttpStatus.OK,
				"Exclusive videos retrieved successfully",
				results_array.rows,
				results_array.count
			)
		}
		catch (err) {
			console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 70 ~ ExclusiveVideosService ~ getAllExclusiveVideos ~ err", err)
			throw err
		}
	}

	async updateAndRemoveExclusiveVideo(body: UpdateExclusiveVideosRequestDto): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				let itemsBeforeDelete: any = await this.exclusiveVideoRepository.findAll({ attributes: ['id', 'newsId'], raw: true, nest: true, transaction: transactionHost.transaction })
				const remove_previous = await this.deleteAllExclusiveVideos(transactionHost)
				if (remove_previous) {
					let record_created;
					for (let i = 0; i < body.exclusiveVideos.length; i++) {
						record_created = await this.createExclusiveVideo(body.exclusiveVideos[i], transactionHost)
						if (!record_created) {
							throw new CustomException(
								Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
								Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
							)
						}
					}

					this.exclusiveVideoRepository.findAll({
						attributes: ['id', 'newsId'],
						raw: true,
						nest: true,
					})
						.then(itemsAfterDelete => {
							let itemDictionary = {};
							// First Loop To Create Dictionary
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

							itemsToFlag.forEach(item => {
								elkUpdateArray.push({
									update: {
										_index: 'news',
										_id: item,
									}
								},
									{
										doc: {
											isExclusiveVideos: true,
										}
									})
							})

							itemsToDeflag.forEach(item => {
								elkUpdateArray.push({
									update: {
										_index: 'news',
										_id: item,
									}
								},
									{
										doc: {
											isExclusiveVideos: false
										}
									})
							})

							ElkService.bulk({ operations: elkUpdateArray })
						})

					return await new GenericResponseDto(
						HttpStatus.OK,
						"Updated sucessfully"
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
		catch (err) {
			console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 85 ~ ExclusiveVideosService ~ updateAndRemoveExclusiveVideo ~ err", err)
			throw err
		}
	}

	private async deleteAllExclusiveVideos(transactionHost) {
		const response = await this.exclusiveVideoRepository.destroy({
			where: {},
			truncate: true,
			restartIdentity: true,
			transaction: transactionHost.transaction
		});
		return response === 0 ? true : response
	}

	async getExclusiveVideoById(id: number): Promise<GetExclusiveVideoByIdResponseDto> {
		try {
			const response = await this.videoExists(id)
			if (response) {
				return new GetExclusiveVideoByIdResponseDto(
					HttpStatus.OK,
					"Exclusive video fetched successfully",
					response
				)
			}
			else {
				throw new CustomException(
					Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
					Exceptions[ExceptionType.RECORD_NOT_FOUND].status
				)
			}
		}
		catch (err) {
			console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 86 ~ ExclusiveVideosService ~ getExclusiveVideoById ~ err", err)
			throw err
		}
	}
	async deleteExclusiveVideoById(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				let video_exists;
				let delete_video;
				const itemsBeforeDelete = await this.exclusiveVideoRepository.findAll({ 
					attributes: ['id', 'newsId'], 
					raw: true, 
					nest: true, 
					transaction: transactionHost.transaction })
					
				for (let i = 0; i < query.id.length; i++) {
					video_exists = await this.videoExists(query.id[i])
					if (video_exists) {
						delete_video = await this.deleteVideoQuery(delete_video, query, i, transactionHost);
						if (!delete_video) {
							throw new CustomException(
								Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
								Exceptions[ExceptionType.UNABLE_TO_DELETE].status
							)
						}
					}
					else {
						throw new CustomException(
							Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
							Exceptions[ExceptionType.RECORD_NOT_FOUND].status
						)
					}
				}

				let bulkUpdateArray = [];

				// construct bulk update array
				query.id.forEach(id => {
					const newsId = itemsBeforeDelete.find(item=> item.id == id)?.newsId
					bulkUpdateArray.push({
						update: {
							_index: 'news',
							_id: newsId,
						}
					},
						{
							doc: {
								isExclusiveVideos: false
							}
						})
				})

				ElkService.bulk({ operations: bulkUpdateArray })

				return new GenericResponseDto(
					HttpStatus.OK,
					"Deleted successfully"
				)
			})
		}
		catch (err) {
			console.log("🚀 ~ file: exclusive-videos.service.ts ~ line 112 ~ ExclusiveVideosService ~ deleteExclusiveVideoById ~ err", err)
			throw err
		}
	}

	private async deleteVideoQuery(delete_video: any, query: DeleteAlexaAudioRequestDto, i: number, transactionHost) {
		delete_video = await this.exclusiveVideoRepository.destroy({
			where: {
				id: query.id[i]
			},
			transaction: transactionHost.transaction
		});
		return delete_video;
	}

	private async allVideosQuery() {
		return await this.exclusiveVideoRepository.findAndCountAll({ include: ['news'] });
	}

	private async videoExists(id: number) {
		return await this.exclusiveVideoRepository.findOne({
			where: {
				id: id
			}
		});
	}

	private async updateExclusiveQuery(body: CreateExclusiveVideosRequestDto, id: number) {
		return await this.exclusiveVideoRepository.update(body,
			{
				where: {
					id: id
				}
			});
	}

	private async createExclusiveVideoQuery(body: any, transactionHost?) {
		return await this.exclusiveVideoRepository.create(body, transactionHost);
	}
}