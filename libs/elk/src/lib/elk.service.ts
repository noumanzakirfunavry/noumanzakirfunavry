import { Client } from '@elastic/elasticsearch';
import {
	BulkRequest,
	DeleteByQueryRequest,
	IndexRequest,
	SearchRequest,
	UpdateRequest
} from '@elastic/elasticsearch/lib/api/types';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ElkService {
	

	private static client: Client = new Client({
		node: "http://157.90.67.186:9217",
		auth: { username: "developer", password: "Dev@321" },
	});
	static get elkInstance() {
		return this.client;
	}

	static async save(params: IndexRequest) {
		this.client
			.index(params)
			.then(() => {
				this.client.indices.refresh({ index: params.index });
			})
			.catch((err) => {
				console.log(
					'🚀 ~ file: elk.service.ts ~ line 24 ~ ElkService ~ index ~ err',
					err.meta.body
				);
			});
	}

	static async search(searchRequest: SearchRequest) {
		try {
			const result = await this.client.search(searchRequest);
			return result.hits.hits;
		} catch (err) {
			console.log(
				'🚀 ~ file: elk.service.ts ~ line 40 ~ ElkService ~ deleteByQuery ~ error',
				err.meta.body)

			throw new InternalServerErrorException
		}
	}

	static async deleteByQuery(params: DeleteByQueryRequest) {
		this.client
			.deleteByQuery(params)
			.then(() => {
				this.client.indices.refresh({ index: params.index });
			})
			.catch((err) => {
				console.log(
					'🚀 ~ file: elk.service.ts ~ line 40 ~ ElkService ~ deleteByQuery ~ error',
					err.meta.body
				);
			});
	}

	static async update(params: UpdateRequest) {
		this.client
			.update(params)
			.then(() => {
				this.client.indices.refresh({ index: params.index });
			})
			.catch((err) => {
				console.log(
					'🚀 ~ file: elk.service.ts ~ line 40 ~ ElkService ~ update ~ error',
					err.meta.body
				);
			});
	}

	static async bulk(params: BulkRequest) {
		this.client.bulk(params)
			.then(() => {
				this.client.indices.refresh({ index: params.index });
			})
			.catch((err) => {
				console.log(
					'🚀 ~ file: elk.service.ts ~ line 40 ~ ElkService ~ bulk ~ error',
					err.meta.body
				);
			});
	}
}
