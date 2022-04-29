import { Comments} from '@cnbc-monorepo/entity'

export const CommentsProvider = [
  {
    provide: 'COMMENTS_REPOSITORY',
    useValue: Comments,
  },
];