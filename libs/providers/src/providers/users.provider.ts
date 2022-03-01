import { Users } from "@cnbc-monorepo/entity";

export const UsersProvider = [
    {
      provide: 'USERS_REPOSITORY',
      useValue: Users,
    },
  ];