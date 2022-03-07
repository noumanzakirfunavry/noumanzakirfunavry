import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";

@Module({

    imports:[EntityModule,ProvidersModule],
    controllers:[],
    providers:[],
    
})
export class CategoriesModule{}