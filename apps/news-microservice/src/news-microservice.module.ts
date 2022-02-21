import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import {AppLoggerMiddleware, RequestCheckerMiddleware } from "@cnbc-monorepo/middleware";
import { AdminModule } from "./admin/admin.module";
import { ClientModule } from "./client/client.module";
@Module({
    imports:[
        AdminModule,
        ClientModule,
    ],
})
export class  NewsMicroserviceModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
          .apply(RequestCheckerMiddleware, AppLoggerMiddleware)
          .forRoutes('*');
      }
}