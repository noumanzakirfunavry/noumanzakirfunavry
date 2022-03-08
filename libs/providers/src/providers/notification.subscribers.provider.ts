import { NotificationSubscriber } from "@cnbc-monorepo/entity";

export const NotificationSubscribersProvider = [
    {
      provide: 'NOTIFICATION_SUBSCRIBERS_REPOSITORY',
      useValue: NotificationSubscriber,
    },
  ];