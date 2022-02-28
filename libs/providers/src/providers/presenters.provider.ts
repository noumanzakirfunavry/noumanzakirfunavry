import { Presenters } from "@cnbc-monorepo/entity";

export const PresentersProvider = [
    {
      provide: 'PRESENTERS_REPOSITORY',
      useValue: Presenters,
    },
  ];