import { Module } from "@nestjs/common";
import {ExceptionHandlingModule} from '@cnbc-monorepo/exception-handling'
import { JobsModule } from "./jobs/jobs.module";

@Module({

    imports:[
        ExceptionHandlingModule,
        JobsModule
    ],


})
export class AdminMicroserviceModule{}