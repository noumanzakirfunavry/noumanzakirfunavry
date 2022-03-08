import { Jobs } from "@cnbc-monorepo/entity";

export const JobsProvider = [
    {
      provide: 'JOBS_REPOSITORY',
      useValue: Jobs,
    },
  ];