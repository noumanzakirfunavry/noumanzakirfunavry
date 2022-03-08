import { EntityModule } from "@cnbc-monorepo/entity";
import { Module } from "@nestjs/common";
import { TagsService } from "./tags.service";
import { TagsController } from "./tags.controller";
import { ProvidersModule } from "@cnbc-monorepo/providers";

@Module({
    imports:[
        EntityModule,
        ProvidersModule
    ],
    controllers:[TagsController],
    providers:[TagsService],
    exports:[TagsService]
})
export class  TagsModule{}