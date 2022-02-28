import { Markets } from "@cnbc-monorepo/entity";

export const MarketsProvider = [
    {
      provide: 'MARKETS_REPOSITORY',
      useValue: Markets,
    },
  ];