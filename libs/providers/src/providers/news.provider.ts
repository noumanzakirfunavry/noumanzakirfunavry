import { News } from "@cnbc-monorepo/entity";

export const NewsProvider = [
    {
      provide: 'NEWS_REPOSITORY',
      useValue: News,
    },
  ];