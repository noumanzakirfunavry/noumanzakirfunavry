import { Quotes } from "@cnbc-monorepo/entity";

export const QuotesProvider = [
    {
      provide: 'QUOTES_REPOSITORY',
      useValue: Quotes,
    },
  ];