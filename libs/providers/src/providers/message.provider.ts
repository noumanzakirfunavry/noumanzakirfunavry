import { Message } from "@cnbc-monorepo/entity";

export const MessageProvider = [
    {
      provide: 'MESSAGE_REPOSITORY',
      useValue: Message,
    },
  ];