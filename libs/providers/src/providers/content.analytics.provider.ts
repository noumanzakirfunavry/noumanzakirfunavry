import { ContentAnalytics } from "@cnbc-monorepo/entity";

export const ContentAnalyticsProvider = [
    {
      provide: 'CONTENT_ANALYTICS_REPOSITORY',
      useValue: ContentAnalytics,
    },
  ];