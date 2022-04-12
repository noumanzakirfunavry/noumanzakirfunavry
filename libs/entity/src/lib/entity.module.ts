import { ElkModule } from '@cnbc-monorepo/elk';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';
import { Connection } from './connection';
@Module({
  controllers: [],
  providers: [...Connection],
  exports: [...Connection,
    ConfigModule
],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath : '.env'
    }),
		// ProvidersModule,
		ElkModule
  ]
})
export class EntityModule {
  
  constructor(){
    console.log("logs for the server ",Connection);
  }
}
