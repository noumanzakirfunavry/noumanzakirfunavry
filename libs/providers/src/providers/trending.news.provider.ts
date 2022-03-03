import { TrendingNews } from "@cnbc-monorepo/entity";

export const TrendingNewsProvider = [
    {
      provide: 'TRENDING_NEWS_REPOSITORY',
      useValue: TrendingNews,
    },
  ];