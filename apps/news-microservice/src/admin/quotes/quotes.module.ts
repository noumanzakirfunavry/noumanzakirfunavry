import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { QuotesController } from "./quotes.controller";
import { QuotesService } from "./quotes.service";

@Module({
    imports:[EntityModule,ProvidersModule],
    controllers:[QuotesController],
    providers:[QuotesService],
    exports:[QuotesService]
})
export class QuotesModule{}