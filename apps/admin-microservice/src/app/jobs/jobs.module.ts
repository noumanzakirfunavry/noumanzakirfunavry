import { Entities, EntityModule } from "@cnbc-monorepo/entity";
import { Module } from "@nestjs/common";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";

@Module({

    imports:[ProvidersModule],
    controllers:[JobsController],
    providers:[JobsService],
    exports:[JobsService]
})
export class JobsModule{}