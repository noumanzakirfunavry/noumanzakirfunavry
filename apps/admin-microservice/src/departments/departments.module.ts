import { EntityModule } from "@cnbc-monorepo/entity";
import { ProvidersModule } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { DepartmentController } from "./departments.controller";
import { DepartmentService } from "./departments.service";

@Module({

    imports:[EntityModule,ProvidersModule],
    controllers:[DepartmentController],
    exports:[DepartmentService],
    providers:[DepartmentService]
})
export class DepartmentModule{}