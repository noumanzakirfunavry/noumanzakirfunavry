import { Module } from '@nestjs/common';
import { ElkService } from './elk.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SocketModule } from '@cnbc-monorepo/socket';
@Module({
  providers: [ElkService],
  exports: [ElkService],
  imports: [
    ConfigModule,
  
  ],
})
export class ElkModule {}
