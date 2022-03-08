import { Module } from "@nestjs/common";
import {ExceptionHandlingModule} from '@cnbc-monorepo/exception-handling'
import { JobsModule } from "./app/jobs/jobs.module";
import { BranchesModule } from "./app/branches/branches.module";
import { DepartmentModule } from "./app/departments/departments.module";
import { CategoriesModule } from "./app/categories/categories.module";
import { AppModule } from "./app/app.module";
import { EntityModule } from "@cnbc-monorepo/entity";

@Module({

    imports:[
        ExceptionHandlingModule,
        AppModule
    ],


})
export class AdminMicroserviceModule{}