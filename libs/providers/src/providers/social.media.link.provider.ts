import { SocialMediaLink } from "@cnbc-monorepo/entity";

export const SocialMediaLinkProvider = [
    {
      provide: 'SOCIAL_MEDIA_LINK_REPOSITORY',
      useValue: SocialMediaLink,
    },
  ];