import { Sessions } from "@cnbc-monorepo/entity";

export const SessionsProvider = [
    {
      provide: 'SESSIONS_REPOSITORY',
      useValue: Sessions,
    },
  ];