import { Tags } from "@cnbc-monorepo/entity";

export const TagsProvider = [
    {
      provide: 'TAGS_REPOSITORY',
      useValue: Tags,
    },
  ];