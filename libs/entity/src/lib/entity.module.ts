import { Module } from '@nestjs/common';
import { Connection } from './connection';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [],
  providers: [...Connection],
  exports: [...Connection
],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ]
})
export class EntityModule {
  constructor() {
    console.log("Entities are being loaded...");

  }

}
