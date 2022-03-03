import { SidebarElements } from "@cnbc-monorepo/entity";

export const SidebarElementsProvider = [
    {
      provide: 'SIDEBAR_ELEMENTS_REPOSITORY',
      useValue: SidebarElements,
    },
  ];