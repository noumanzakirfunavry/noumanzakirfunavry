import { Module } from '@nestjs/common';
import { ElkService } from './elk.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  providers: [ElkService],
  exports: [ElasticsearchModule],
  imports: [
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('ELASTICSEARCH_NODE'),
        auth: {
          username: configService.get('ELASTICSEARCH_USERNAME'),
          password: configService.get('ELASTICSEARCH_PASSWORD'),
        }
      }),
      inject: [ConfigService],
    }),
  ],
})
export class ElkModule {}
