import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ElkService } from './elk.service';
@Module({
	providers: [ElkService],
	exports: [ElkService],
	imports: [
		ConfigModule,

	],
})
export class ElkModule { }
