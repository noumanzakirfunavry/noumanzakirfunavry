import { Categories } from "@cnbc-monorepo/entity";

export const CategoriesProvider = [
    {
      provide: 'CATEGORIES_REPOSITORY',
      useValue: Categories,
    },
  ];