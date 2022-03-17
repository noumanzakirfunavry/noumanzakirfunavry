import { NewsHasQuotes } from "@cnbc-monorepo/entity";

export const NewsHasQuotesProvider = [
    {
      provide: 'NEWS_HAS_QUOTES_REPOSITORY',
      useValue: NewsHasQuotes,
    },
  ];