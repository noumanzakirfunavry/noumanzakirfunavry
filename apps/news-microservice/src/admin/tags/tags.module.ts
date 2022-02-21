import { Module } from "@nestjs/common";
import { TagsController } from "./tags.controller";
import { TagsService } from "./tags.service";
import {EntityModule} from '@cnbc-monorepo/entity'

@Module({
    imports:[
        EntityModule
    ],
    controllers:[TagsController],
    providers:[TagsService],
    exports:[TagsService]
})
export class  TagsModule{}