import { Client } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';
import {SearchRequest} from '@elastic/elasticsearch';
import { Menus } from '@cnbc-monorepo/entity';

@Injectable()
export class ElkService {
  static client: Client = new Client({
    node: 'http://157.90.67.186:9200',
    auth: { username: 'developer', password: 'Dev@321' },
  });
  static get elkInstance() {
    return this.client;
  }

  static async index(dataToUpload: { index: string; document: any }) {
    try {
      const response = await this.client.index(dataToUpload);
      console.log(
        '🚀 ~ file: elk.service.ts ~ line 17 ~ ElkService ~ index ~ response',
        response
      );

      await this.client.indices.refresh({ index: dataToUpload.index });
    } catch (err) {
      console.log(
        '🚀 ~ file: elk.service.ts ~ line 24 ~ ElkService ~ index ~ err',
        err
      );
    }
  }

  static async search(searchRequest: SearchRequest) {
    const result = await this.client.search(searchRequest);
    // console.log("🚀 ~ file: elk.service.ts ~ line 42 ~ ElkService ~ search ~ result", result)
    // console.log(result.hits.hits.length);

    return result.hits.hits;
  }
}
