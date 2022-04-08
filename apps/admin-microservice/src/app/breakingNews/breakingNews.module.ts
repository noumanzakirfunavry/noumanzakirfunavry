import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { BreakingNewsClientController } from "./breakingNews.client.controller";
import { BreakingNewsController } from "./breakingNews.controller";
import { BreakingNewsService } from "./breakingNews.service";
import {ElkModule} from '@cnbc-monorepo/elk'
@Module({

    imports:[EntityModule,ProvidersModule,ElkModule],
    controllers:[BreakingNewsController,BreakingNewsClientController],
    providers:[BreakingNewsService],
    exports:[BreakingNewsService]
})
export class BreakingNewsModule{}