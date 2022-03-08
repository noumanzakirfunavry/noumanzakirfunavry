import { Sidebars } from "@cnbc-monorepo/entity";

export const SidebarsProvider = [
    {
      provide: 'SIDEBARS_REPOSITORY',
      useValue: Sidebars,
    },
  ];