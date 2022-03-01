import { ExclusiveVideos } from "@cnbc-monorepo/entity";

export const ExclusiveVideosProvider = [
    {
      provide: 'EXCLUSIVE_VIDEOS_REPOSITORY',
      useValue: ExclusiveVideos,
    },
  ];