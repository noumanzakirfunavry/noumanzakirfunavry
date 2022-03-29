import { Module } from '@nestjs/common';
import { ElkService } from './elk.service';

@Module({
  controllers: [],
  providers: [ElkService],
  exports: [],
})
export class ElkModule {}
