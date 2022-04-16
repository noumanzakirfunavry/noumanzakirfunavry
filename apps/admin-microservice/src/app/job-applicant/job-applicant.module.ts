import { Module } from '@nestjs/common';
import { JobApplicantService } from './job-applicant.service';
import { JobApplicantController } from './job-applicant.controller';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { JobApplicantClientController } from './job-applicant.client.controller';

@Module({
  providers: [JobApplicantService],
  controllers: [JobApplicantController, JobApplicantClientController],
  imports : [
    UtilityModule,
    ProvidersModule
  ]
})
export class JobApplicantModule {}
