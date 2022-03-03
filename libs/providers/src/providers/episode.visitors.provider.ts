import { EpisodeVisitors } from "@cnbc-monorepo/entity";

export const EpisodeVisitorsProvider = [
    {
      provide: 'EPISODE_VISITORS_REPOSITORY',
      useValue: EpisodeVisitors,
    },
  ];