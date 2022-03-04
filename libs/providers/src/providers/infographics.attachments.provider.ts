import { InfographicsAttachments } from "@cnbc-monorepo/entity";

export const InfographicsAttachmentProvider = [
    {
      provide: 'INFOGRAPICS_ATTACHMENTS_REPOSITORY',
      useValue: InfographicsAttachments,
    },
  ];