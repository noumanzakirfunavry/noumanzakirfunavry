import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { ClientCategoriesController } from './categories.client.controller';
import { UtilityModule } from '@cnbc-monorepo/utility';

@Module({

    imports:[ProvidersModule,UtilityModule],
    controllers:[CategoriesController, ClientCategoriesController],
    providers:[CategoriesService],
    exports:[CategoriesService]
    
})
export class CategoriesModule{}