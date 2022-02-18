import { PushNotification } from "@cnbc-monorepo/entity";

export const PushNotificationProvider = [
    {
      provide: 'PUSH_NOTIFICATION_REPOSITORY',
      useValue: PushNotification,
    },
  ];