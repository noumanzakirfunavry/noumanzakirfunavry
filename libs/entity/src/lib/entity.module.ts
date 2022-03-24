import { Module } from '@nestjs/common';
import { Connection } from './connection';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config'

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
  ]
})
export class EntityModule {
  
  constructor(){
    console.log("logs for the server ",Connection);
  }
}
