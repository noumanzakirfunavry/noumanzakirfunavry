import { Branches } from "@cnbc-monorepo/entity";

export const BranchesProvider = [
    {
      provide: 'BRANCHES_REPOSITORY',
      useValue: Branches,
    },
  ];