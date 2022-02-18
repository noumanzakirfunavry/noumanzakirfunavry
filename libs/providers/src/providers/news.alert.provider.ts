import { NewsAlert } from "@cnbc-monorepo/entity";

export const NewsAlertProvider = [
    {
      provide: 'NEWS_ALERT_REPOSITORY',
      useValue: NewsAlert,
    },
  ];