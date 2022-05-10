import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import path from 'path';
import fs from 'fs';
import request from 'request';
import { DailymotionUploadRequests } from '@cnbc-monorepo/entity';

@Injectable()
export class DailymotionService {
	constructor(
		@Inject('DAILYMOTION_UPLOAD_REQUESTS_REPOSITORY')
		private dailymotionUploadRepo: typeof DailymotionUploadRequests
	) { }
	async uploadToDailyMotion() {
		const getUploadUrl = 'https://api.dailymotion.com/file/upload';
		const publishVideoUrl = 'https://api.dailymotion.com/me/videos';
		const access_token = 'eGZQf19PI3tACAVVDANgRgVGf1xIH0QgEAN0CBIGZR5m';

		const pendingUploads = await this.dailymotionUploadRepo.findAll({
			where: {
				status: 'Pending',
				uploadedAt: null
			}
		})

		if (!pendingUploads) {
			return
		}

		for (const pendingUpload of pendingUploads) {
			try {
				const { data } = await axios.get(getUploadUrl, {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				});

				const uploadOptions = {
					method: 'POST',
					url: data.upload_url,
					headers: {},
					formData: {
						file: {
							value: fs.createReadStream(path.join(process.env.DATABASE_FILE_UPLOAD_PATH, pendingUpload.localPath)),
							options: {
								contentType: null,
							},
						},
					},
				};
				request(uploadOptions, function (error, response) {
					if (error) throw new Error(error);
					// console.log(JSON.parse(response.body));

					const publishOptions = {
						method: 'POST',
						url: publishVideoUrl,
						headers: {
							Authorization: `Bearer ${access_token}`,
						},
						formData: {
							file: {
								value: fs.createReadStream(path.join(process.env.DATABASE_FILE_UPLOAD_PATH, pendingUpload.localPath)),
								options: {
									contentType: null,
								},
							},
						},
					};
				});
			} catch (err) {
				console.log(err);

			}
		}



	}
}
