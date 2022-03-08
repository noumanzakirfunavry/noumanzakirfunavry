import { SeoDetails } from "@cnbc-monorepo/entity";

export const SeoDetailsProvider = [
    {
      provide: 'SEO_DETAILS_REPOSITORY',
      useValue: SeoDetails,
    },
  ];