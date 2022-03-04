import { Qualification } from "@cnbc-monorepo/entity";

export const QualificationProvider = [
    {
      provide: 'QUALIFICATION_REPOSITORY',
      useValue: Qualification,
    },
  ];