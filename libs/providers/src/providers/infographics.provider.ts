import { Infographics } from "@cnbc-monorepo/entity";

export const InfographicsProvider = [
    {
      provide: 'INFOGRAPHICS_REPOSITORY',
      useValue: Infographics,
    },
  ];