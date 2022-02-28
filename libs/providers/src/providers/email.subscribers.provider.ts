import { EmailSubscribers } from "@cnbc-monorepo/entity";

export const EmailSubscribersProvider = [
    {
      provide: 'EMAIL_SUBSCRIBERS_REPOSITORY',
      useValue: EmailSubscribers,
    },
  ];