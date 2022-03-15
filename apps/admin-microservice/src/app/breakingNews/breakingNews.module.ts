import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Controller, Module } from "@nestjs/common";
import { BreakingNewsClientController } from "./breakingNews.client.controller";
import { BreakingNewsController } from "./breakingNews.controller";
import { BreakingNewsService } from "./breakingNews.service";

@Module({

    imports:[EntityModule,ProvidersModule],
    controllers:[BreakingNewsController,BreakingNewsClientController],
    providers:[BreakingNewsService],
    exports:[BreakingNewsService]
})
export class BreakingNewsModule{}