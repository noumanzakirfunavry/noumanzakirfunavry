import { NewsHasTags } from "@cnbc-monorepo/entity";

export const NewsHasTagsProvider = [
    {
      provide: 'NEWS_HAS_TAGS_REPOSITORY',
      useValue: NewsHasTags,
    },
  ];