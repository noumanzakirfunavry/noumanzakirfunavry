import { Programs } from "@cnbc-monorepo/entity";

export const ProgramsProvider = [
    {
      provide: 'PROGRAMS_REPOSITORY',
      useValue: Programs,
    },
  ];