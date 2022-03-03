import { Roles } from "@cnbc-monorepo/entity";

export const RolesProvider = [
    {
      provide: 'ROLES_REPOSITORY',
      useValue: Roles,
    },
  ];