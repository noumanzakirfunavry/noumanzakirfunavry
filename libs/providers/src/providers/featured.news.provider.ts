import { FeaturedNews } from "@cnbc-monorepo/entity";

export const FeaturedNewsProvider = [
    {
      provide: 'FEATURED_NEWS_REPOSITORY',
      useValue: FeaturedNews,
    },
  ];