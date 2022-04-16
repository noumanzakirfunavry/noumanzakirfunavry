import { Module } from "@nestjs/common";
import { TagsController } from "./tags.controller";
import { TagsService } from "./tags.service";
import {EntityModule} from '@cnbc-monorepo/entity'
import { ProvidersModule} from '@cnbc-monorepo/providers'
import { UtilityModule } from "@cnbc-monorepo/utility";
@Module({
    imports:[
        EntityModule,
        ProvidersModule,
        UtilityModule,

    ],
    controllers:[TagsController],
    providers:[TagsService],
    exports:[TagsService]
})
export class  TagsModule{}