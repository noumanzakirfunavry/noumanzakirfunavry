import { Languages } from "@cnbc-monorepo/entity";

export const LanguagesProvider = [
    {
      provide: 'LANGUAGES_REPOSITORY',
      useValue: Languages,
    },
  ];