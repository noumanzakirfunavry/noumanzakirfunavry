import { Module } from "@nestjs/common";
import {ExceptionHandlingModule} from '@cnbc-monorepo/exception-handling'
import { JobsModule } from "./app/jobs/jobs.module";
import { BranchesModule } from "./app/branches/branches.module";
import { DepartmentModule } from "./app/departments/departments.module";
import { CategoriesModule } from "./app/categories/categories.module";
import { AppModule } from "./app/app.module";
import { EntityModule } from "@cnbc-monorepo/entity";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({

    imports:[
        ExceptionHandlingModule,
        AppModule,
        ServeStaticModule.forRoot({
            rootPath: process.env.DATABASE_FILE_UPLOAD_PATH,
          }),
    ],


})
export class AdminMicroserviceModule{}