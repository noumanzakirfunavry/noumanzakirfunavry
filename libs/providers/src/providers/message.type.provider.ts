import { MessageType } from "@cnbc-monorepo/entity";

export const MessageTypeProvider = [
    {
      provide: 'MESSAGE_TYPE_REPOSITORY',
      useValue: MessageType,
    },
  ];