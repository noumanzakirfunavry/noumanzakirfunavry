import { Rights } from "@cnbc-monorepo/entity";

export const RightsProvider = [
    {
      provide: 'RIGHTS_REPOSITORY',
      useValue: Rights,
    },
  ];