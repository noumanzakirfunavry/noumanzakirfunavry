import { JobApplicants } from "@cnbc-monorepo/entity";

export const JobApplicantsProvider = [
    {
      provide: 'JOB_APPLICANTS_REPOSITORY',
      useValue: JobApplicants,
    },
  ];