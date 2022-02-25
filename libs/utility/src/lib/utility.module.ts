import { Module } from '@nestjs/common';
import { Helper } from '../helpers/helper.service';

@Module({
  controllers: [],
  providers: [Helper],
  exports: [Helper],
})
export class UtilityModule {}
