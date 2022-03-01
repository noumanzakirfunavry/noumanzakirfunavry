import { QuickLinks } from "@cnbc-monorepo/entity";

export const QuickLinksProvider = [
    {
      provide: 'QUICK_LINKS_REPOSITORY',
      useValue: QuickLinks,
    },
  ];