import { Nationality } from "@cnbc-monorepo/entity";

export const NationalityProvider = [
    {
      provide: 'NATIONALITY_REPOSITORY',
      useValue: Nationality,
    },
  ];