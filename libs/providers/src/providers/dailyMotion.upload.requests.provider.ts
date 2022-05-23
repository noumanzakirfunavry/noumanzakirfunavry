import { DailymotionUploadRequests } from "@cnbc-monorepo/entity";

export const DailymotionUploadRequestsProvider = [
    {
      provide: 'DAILYMOTION_UPLOAD_REQUESTS_REPOSITORY',
      useValue: DailymotionUploadRequests,
    },
  ];