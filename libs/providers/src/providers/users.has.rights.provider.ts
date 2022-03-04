import { UsersHasRights } from "@cnbc-monorepo/entity";

export const UsersHasRightsProvider = [
    {
      provide: 'USERS_HAS_RIGHTS',
      useValue: UsersHasRights,
    },
  ];