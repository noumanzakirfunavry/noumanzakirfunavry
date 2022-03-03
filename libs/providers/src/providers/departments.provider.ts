import { Departments } from "@cnbc-monorepo/entity";

export const DepartmentsProvider = [
    {
      provide: 'DEPARTMENTS_REPOSITORY',
      useValue: Departments,
    },
  ];