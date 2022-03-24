import { EpisodesHasTags } from "@cnbc-monorepo/entity";

export const EpisodeHasTagsProvider = [
    {
      provide: 'EPISODE_HAS_TAGS_REPOSITORY',
      useValue: EpisodesHasTags,
    },
  ];