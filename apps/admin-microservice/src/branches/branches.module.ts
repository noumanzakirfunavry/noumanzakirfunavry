import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { BranchesController } from "./branches.controller";
import { BranchesService } from "./branches.service";

@Module({
    imports:[EntityModule,ProvidersModule],
    controllers:[BranchesController],
    providers:[BranchesService],
    exports:[BranchesService]
    
})
export class BranchesModule{}