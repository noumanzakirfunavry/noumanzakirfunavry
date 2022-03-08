import { Banner } from "@cnbc-monorepo/entity";

export const BannerProvider = [
    {
      provide: 'BANNER_REPOSITORY',
      useValue: Banner,
    },
  ];