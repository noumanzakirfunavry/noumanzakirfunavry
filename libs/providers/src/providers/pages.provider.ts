import { Pages } from "@cnbc-monorepo/entity";

export const PagesProvider = [
    {
      provide: 'PAGES_REPOSITORY',
      useValue: Pages,
    },
  ];