import { SiteConfiguration } from "@cnbc-monorepo/entity";

export const SiteConfigurationProvider = [
    {
      provide: 'SITE_CONFIGURATION_REPOSITORY',
      useValue: SiteConfiguration,
    },
  ];