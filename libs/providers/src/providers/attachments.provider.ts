import { Attachments } from "@cnbc-monorepo/entity";

export const AttachmentsProvider = [
    {
      provide: 'ATTACHMENTS_REPOSITORY',
      useValue: Attachments,
    },
  ];