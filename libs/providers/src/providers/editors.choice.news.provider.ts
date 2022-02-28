import { EditorsChoiceNews } from "@cnbc-monorepo/entity";

export const EditorsChoiceNewsProvider = [
    {
      provide: 'EDITORS_CHOICE_NEWS_REPOSITORY',
      useValue: EditorsChoiceNews,
    },
  ];