import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { UtilityModule } from "@cnbc-monorepo/utility";
import { Module } from "@nestjs/common";
import { QuickLinksController } from "./quickLinks.controller";
import { QuickLinksService } from "./quickLinks.service";

@Module({
    imports:[EntityModule,ProvidersModule,UtilityModule],
    controllers:[QuickLinksController],
    providers:[QuickLinksService],
    exports:[QuickLinksService]
})
export class QuickLinksModule{}