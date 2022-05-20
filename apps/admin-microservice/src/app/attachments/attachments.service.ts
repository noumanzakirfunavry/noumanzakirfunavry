
import { CreateAttachmentRequestDto, DeleteAttachmentRequestDto, GenericResponseDto, GetAllAttachmentsRequestDto, UpdateAttachmentRequestDto } from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { Attachments, DailymotionUploadRequests, News } from '@cnbc-monorepo/entity';
import { AttachmentTypes } from '@cnbc-monorepo/enums';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Op } from 'sequelize';

@Injectable()
export class AttachmentsService {
	constructor(
		@Inject('ATTACHMENTS_REPOSITORY')
		private attachmentsRepository: typeof Attachments,

		@Inject('DAILYMOTION_UPLOAD_REQUESTS_REPOSITORY')
		private dailymotionUploadRepo: typeof DailymotionUploadRequests,
		
		@Inject('NEWS_REPOSITORY')
		private newsRepository: typeof News,

		private helperService: Helper
	) { }

	async createAttachment(file, body: CreateAttachmentRequestDto, userId): Promise<GenericResponseDto> {
		try {
			const attachment_obj = this.helperService.attachmentObj(body, userId, file[0].filename)
			const response = await this.attachmentCreationQuery(attachment_obj)
			if (response) {
				if (response.attachmentType === AttachmentTypes.VIDEO) {
					this.dailymotionUploadRepo.create({
						title: response.title,
						description: response.description,
						tags: body.tags,
						channel: body.channel,
						toBePublished: body.toBePublished,
						toBePrivate: body.toBePrivate,
						isCreatedForKids: body.isCreatedForKids,
						localPath: response.path,
						attachmentId: response.id
					}).then(res => {
						axios.post(process.env.DAILYMOTION_UPLOAD_API_PATH, res)
					}).catch(console.log)
				}
				return new GenericResponseDto(
					HttpStatus.OK,
					"Attachment added successfully",
					response
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
			console.log("🚀 ~ file: attachments.service.ts ~ line 37 ~ AttachmentsService ~ createAttachment ~ err", err)
			throw err
		}
	}

	async getAllAttachments(query: GetAllAttachmentsRequestDto): Promise<GenericResponseDto> {
		try {
			const response = await this.getAllAttachmentsQuery(query)
			return new GenericResponseDto(
				HttpStatus.OK,
				"Attachments fetched successfully",
				{
					attachments: response.rows,
					totalCount: response.count
				}
			)
		}
		catch (err) {
			console.log("🚀 ~ file: attachments.service.ts ~ line 54 ~ AttachmentsService ~ getAllAttachments ~ err", err)
			throw err
		}
	}

	private async getAllAttachmentsQuery(query: GetAllAttachmentsRequestDto) {
		const { pageNo, limit, title, description, ...where } = query
		return await this.attachmentsRepository.findAndCountAll(
			{
				where: {
					...where,
					...(title && {
						title: {
								[Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(title)}%`
						}
				}),
				...(description && {
					description: {
							[Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(description)}%`
					}
			}),
				},
				limit: parseInt(limit.toString()),
				offset: this.helperService.offsetCalculator(pageNo, limit)
			}
		);
	}

	async updateAttachment(id: number, body: UpdateAttachmentRequestDto): Promise<GenericResponseDto> {
		try {
			const attachment_exists = await this.attachmentExistsQuery(id)
			if (attachment_exists) {
				const response = await this.updateAttachmentQuery(body, id)
				if (response[0]) {
					this.updateAttachmentElk(id, attachment_exists.attachmentType)

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
			console.log("🚀 ~ file: attachments.service.ts ~ line 93 ~ AttachmentsService ~ updateAttachment ~ err", err)
			throw err
		}
	}

	async deleteAttachments(query: DeleteAttachmentRequestDto): Promise<GenericResponseDto> {
		let attachment_exists;
		let response;
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
					attachment_exists = await this.attachmentExistsQuery(query.id[0])
					if (attachment_exists) {
						response = await this.deleteAttachmentsQuery(query.id[0], transactionHost)
						if (!response) {
							throw new CustomException(
								Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
								Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
							)
						}
					}
					else {
						throw new CustomException(
							Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
							Exceptions[ExceptionType.RECORD_NOT_FOUND].status
						)
					}
				this.deleteAttachmentElk(query.id[0])

				return new GenericResponseDto(
					HttpStatus.OK,
					"Deleted successfully"
				)
			})
		}
		catch (err) {
			console.log("🚀 ~ file: attachments.service.ts ~ line 129 ~ AttachmentsService ~ deleteAttachments ~ err", err)
			throw err
		}
	}
	async getAttachmentById(id: number): Promise<GenericResponseDto> {
		try {
			const attachment_exists = await this.attachmentExistsQuery(id)
			if (attachment_exists) {
				// const file = fs.readFileSync(attachment_exists.path);
				return new GenericResponseDto(
					HttpStatus.OK,
					"Attachment fetched successfully",
					{
						attachment: attachment_exists
					}
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
			console.log("🚀 ~ file: attachments.service.ts ~ line 102 ~ AttachmentsService ~ getAttachmentById ~ err", err)
			throw err
		}
	}


	private async deleteAttachmentsQuery(id, transactionHost) {
		return await this.attachmentsRepository.destroy({
			where: {
				id: id
			},
			transaction: transactionHost.transaction
		})
	}

	private async updateAttachmentQuery(body: UpdateAttachmentRequestDto, id: number) {
		return await this.attachmentsRepository.update(body, {
			where: {
				id: id
			}
		});
	}

	private async attachmentExistsQuery(id: number) {
		return await this.attachmentsRepository.findOne({
			where: {
				id: id
			}
		});
	}

	private async attachmentCreationQuery(attachment_obj: any) {
		return await this.attachmentsRepository.create(attachment_obj);
	}

	updateAttachmentElk(id: number, attachmentType: AttachmentTypes) {
		(this.newsRepository.findAll({
			include: [
				{
					model: Attachments,
					as: attachmentType.toLowerCase(),
					where: { id },
					paranoid: false
				}
			],
			raw: true,
			nest: true
		}))
			.then(res => {
				let bulkUpdateArray = [];

				// construct bulk update array
				res.forEach(news => {
					let updateDoc = {};

					// check what was updated, and build a update object accordingly
					// +id is for explicitly casting id to number type
					switch (+id) {
						case news.imageId:
							updateDoc = {
								image: {
									title: news.image.title,
									description: news.image.description
								}
							}
							break;
						case news.videoId:
							updateDoc = {
								video: {
									title: news.video.title,
									description: news.video.description
								}
							}
							break;
						case news.thumbnailId:
							updateDoc = {
								thumbnail: {
									title: news.thumbnail.title,
									description: news.thumbnail.description
								}
							}
							break;
						default:
							break;
					}					
					bulkUpdateArray.push({
						update: {
							_index: process.env.ELK_INDEX,
							_id: news.id,
						}
					},
						{
							doc: updateDoc
						})
				})
				ElkService.bulk({ operations: bulkUpdateArray })
			})
			.catch(err=>{
				console.log(err.message)
			})
	}

	deleteAttachmentElk(id: number) {
		this.attachmentsRepository.findOne({ where: { id }, paranoid: false, raw: true, nest: true })
			.then(res => {
				this.newsRepository.findAll({
					include: [{
						model: Attachments,
						as: res.attachmentType.toLowerCase(),
						where: { id },
						paranoid: false
					}],
					raw: true,
					nest: true
				})
					.then(newsRes => {
						let bulkUpdateArray = [];

						// construct bulk update array
						newsRes.forEach(news => {
							let updateDoc = {};

							// check what was deleted, and build a update object accordingly
							// +id is for explicitly casting id to number type
							switch (+id) {
								case news.imageId:
									updateDoc = {
										image: {
											deletedAt: new Date().toISOString()
										}
									}
									break;
								case news.videoId:
									updateDoc = {
										video: {
											deletedAt: new Date().toISOString()
										}
									}
									break;
								case news.thumbnailId:
									updateDoc = {
										thumbnail: {
											deletedAt: new Date().toISOString()
										}
									}
									break;
								default:
									break;
							}
							bulkUpdateArray.push({
								update: {
									_index: process.env.ELK_INDEX,
									_id: news.id,
								}
							},
								{
									doc: updateDoc
								})
						})
						ElkService.bulk({ operations: bulkUpdateArray })
					})
			})
			.catch(err=>{
				console.log(err.message)
			})
	}
}
