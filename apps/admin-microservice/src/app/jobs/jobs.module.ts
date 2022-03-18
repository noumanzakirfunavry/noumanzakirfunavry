import { Entities, EntityModule } from "@cnbc-monorepo/entity";
import { Module } from "@nestjs/common";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";
import { JobsClientController } from "./jobs.client.controller";

@Module({

    imports:[ProvidersModule],
    controllers:[JobsController,JobsClientController],
    providers:[JobsService],
    exports:[JobsService]
})
export class JobsModule{}