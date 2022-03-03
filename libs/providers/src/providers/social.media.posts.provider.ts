import { SocialMediaPosts } from "@cnbc-monorepo/entity";

export const SocialMediaPostsProvider = [
    {
      provide: 'SOCIAL_MEDIA_POSTS_REPOSITORY',
      useValue: SocialMediaPosts,
    },
  ];