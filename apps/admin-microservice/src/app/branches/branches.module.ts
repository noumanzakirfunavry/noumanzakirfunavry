import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { BranchesClientController } from "./branches.client.controller";
import { BranchesController } from "./branches.controller";
import { BranchesService } from "./branches.service";

@Module({
    imports:[ProvidersModule],
    controllers:[BranchesController,BranchesClientController],
    providers:[BranchesService],
    exports:[BranchesService]
    
})
export class BranchesModule{}