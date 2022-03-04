import { Episodes } from "@cnbc-monorepo/entity";

export const EpisodesProvider = [
    {
      provide: 'EPISODES_REPOSITORY',
      useValue: Episodes,
    },
  ];