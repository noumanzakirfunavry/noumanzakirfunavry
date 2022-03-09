import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";

@Module({

    imports:[ProvidersModule],
    controllers:[CategoriesController],
    providers:[CategoriesService],
    exports:[CategoriesService]
    
})
export class CategoriesModule{}