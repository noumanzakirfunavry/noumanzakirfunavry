import { Attachments, DailymotionUploadRequests } from '@cnbc-monorepo/entity';
import { DailymotionUploadStatus } from '@cnbc-monorepo/enums';
import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import fs from 'fs';
import path from 'path';
import qs from 'qs';
import request from 'request';

@Injectable()
export class DailymotionService {
	constructor(
		@Inject('DAILYMOTION_UPLOAD_REQUESTS_REPOSITORY')
		private dailymotionUploadRepo: typeof DailymotionUploadRequests,

		@Inject('ATTACHMENTS_REPOSITORY')
		private attachmentsRepository: typeof Attachments,
	) { }

	async getDailymotionToken(requestId: number) {
		const data = qs.stringify({
			client_id: process.env.DAILYMOTION_CLIENT_ID,
			client_secret: process.env.DAILYMOTION_CLIENT_SECRET,
			username: process.env.DAILYMOTION_USERNAME,
			password: process.env.DAILYMOTION_PASSWORD,
			grant_type: 'password',
			scope: 'email userinfo manage_videos',
		});
		const config: AxiosRequestConfig = {
			method: 'post',
			url: 'https://api.dailymotion.com/oauth/token',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: data,
		};

		try {
			const result = await axios(config);
			return result.data.access_token
		} catch (error) {
			this.dailymotionUploadRepo.update(
				{ status: DailymotionUploadStatus.FAILED, error: error.message },
				{ where: { id: requestId } })
		}
	}

	async uploadToDailymotion(dailymotionRequestDto: DailymotionUploadRequests) {
		const access_token = await this.getDailymotionToken(dailymotionRequestDto.id);
		const getUploadUrl = 'https://api.dailymotion.com/file/upload';
		const publishVideoUrl = 'https://api.dailymotion.com/me/videos';
		const getUploadUrlConfig: AxiosRequestConfig = {
			method: 'get',
			url: getUploadUrl,
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		};

		axios(getUploadUrlConfig).then((response) => {
			// upload video
			this.dailymotionUploadRepo.update({ progressUrl: response.data.progress_url }, { where: { id: dailymotionRequestDto.id } })
			const options = {
				method: 'POST',
				url: response.data.upload_url,
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
				formData: {
					title: dailymotionRequestDto.title,
					tags: dailymotionRequestDto.tags,
					channel: dailymotionRequestDto.channel,
					published: `${dailymotionRequestDto.toBePublished}`,
					fields: 'id,url,title,description,is_created_for_kids',
					description: dailymotionRequestDto.description,
					private: `${dailymotionRequestDto.toBePrivate}`,
					file: {
						value: fs.createReadStream(path.join(process.env.DATABASE_FILE_UPLOAD_PATH, dailymotionRequestDto.localPath)),
						options: {
							filename: path.join(process.env.DATABASE_FILE_UPLOAD_PATH, dailymotionRequestDto.localPath),
							contentType: null,
						},
					},
					is_created_for_kids: `${dailymotionRequestDto.isCreatedForKids}`,
				},
			};
			request(options, (error, response2) => {
				const data = qs.stringify({
					url: JSON.parse(response2.body)['url'],
					title: dailymotionRequestDto.title,
					tags: dailymotionRequestDto.tags,
					channel: dailymotionRequestDto.channel,
					published: `${dailymotionRequestDto.toBePublished}`,
					fields: 'id,url,title,description,is_created_for_kids',
					description: dailymotionRequestDto.description,
					private: `${dailymotionRequestDto.toBePrivate}`,
					is_created_for_kids: `${dailymotionRequestDto.isCreatedForKids}`
				});
				const publishVideoConfig: AxiosRequestConfig = {
					method: 'post',
					url: publishVideoUrl,
					headers: {
						Authorization: `Bearer ${access_token}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					data: data,
				};

				axios(publishVideoConfig).then((response) => {
					this.attachmentsRepository.update(
						{
							dailyMotionURL: response.data.url,
						},
						{
							where: {
								id: dailymotionRequestDto.attachmentId
							}
						})
						.then(res => {
							this.dailymotionUploadRepo.destroy({ where: { id: dailymotionRequestDto.id } })
						})

				});
			});
		}).catch(err => {
			this.dailymotionUploadRepo.update(
				{ status: DailymotionUploadStatus.FAILED, error: err.message },
				{ where: { id: dailymotionRequestDto.id } })
		})

		// }



	}
}
