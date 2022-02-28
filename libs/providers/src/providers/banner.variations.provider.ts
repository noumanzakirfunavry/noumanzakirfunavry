import { BannerVariations } from "@cnbc-monorepo/entity";

export const BannerVariationsProvider = [
    {
      provide: 'BANNER_VARIATIONS_REPOSITORY',
      useValue: BannerVariations,
    },
  ];