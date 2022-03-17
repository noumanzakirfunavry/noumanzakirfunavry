import { Module } from '@nestjs/common';
import { Helper } from '../helpers/helper.service';
import {ProvidersModule} from '@cnbc-monorepo/providers'
@Module({
  controllers: [],
  providers: [Helper],
  exports: [Helper],
  imports : [ProvidersModule]
})
export class UtilityModule {}
