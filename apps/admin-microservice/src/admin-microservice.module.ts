import { Module } from "@nestjs/common";
import {ExceptionHandlingModule} from '@cnbc-monorepo/exception-handling'
import { JobsModule } from "./jobs/jobs.module";
import { BranchesModule } from "./branches/branches.module";
import { DepartmentModule } from "./departments/departments.module";

@Module({

    imports:[
        ExceptionHandlingModule,
        JobsModule,
        BranchesModule,
        DepartmentModule
    ],


})
export class AdminMicroserviceModule{}