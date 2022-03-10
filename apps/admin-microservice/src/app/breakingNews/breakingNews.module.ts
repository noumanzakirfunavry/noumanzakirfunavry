import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Controller, Module } from "@nestjs/common";
import { BreakingNewsController } from "./breakingNews.controller";
import { BreakingNewsService } from "./breakingNews.service";

@Module({

    imports:[EntityModule,ProvidersModule],
    controllers:[BreakingNewsController],
    providers:[BreakingNewsService],
    exports:[BreakingNewsService]
})
export class BreakingNewsModule{}