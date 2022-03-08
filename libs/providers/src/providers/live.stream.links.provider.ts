import { LiveStreamLinks } from "@cnbc-monorepo/entity";

export const LiveStreamLinksProvider = [
    {
      provide: 'LIVE_STREAM_LINKS_REPOSITORY',
      useValue: LiveStreamLinks,
    },
  ];