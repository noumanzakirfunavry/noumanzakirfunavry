import { EpisodesHasQuotes } from "@cnbc-monorepo/entity";

export const EpisodeHasQuotesProvider = [
    {
      provide: 'EPISODE_HAS_QUOTES_REPOSITORY',
      useValue: EpisodesHasQuotes,
    },
  ];