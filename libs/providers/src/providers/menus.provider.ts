import { Menus } from "@cnbc-monorepo/entity";

export const MenusProvider = [
    {
      provide: 'MENUS_REPOSITORY',
      useValue: Menus,
    },
  ];