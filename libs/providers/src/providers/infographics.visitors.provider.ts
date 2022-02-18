import { InfographicsVisitors } from "@cnbc-monorepo/entity";

export const InfographicsVisitorsProvider = [
    {
      provide: 'INFOGRAPHICS_VISITORS_REPOSITORY',
      useValue: InfographicsVisitors,
    },
  ];