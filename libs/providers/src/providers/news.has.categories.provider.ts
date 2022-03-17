import { NewsHasCategories } from "@cnbc-monorepo/entity";

export const NewsHasCategoriesProvider = [
    {
      provide: 'NEWS_HAS_CATEGORIES_REPOSITORY',
      useValue: NewsHasCategories,
    },
  ];