import { BreakingNews } from "@cnbc-monorepo/entity";

export const BreakingNewsProvider = [
    {
      provide: 'BREAKING_NEWS_REPOSITORY',
      useValue: BreakingNews,
    },
  ];