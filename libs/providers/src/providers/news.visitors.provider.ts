import { NewsVisitors } from "@cnbc-monorepo/entity";

export const NewsVisitorsProvider = [
    {
      provide: 'NEWS_VISITORS_REPOSITORY',
      useValue: NewsVisitors,
    },
  ];