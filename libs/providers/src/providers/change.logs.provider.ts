import { ChangeLogs } from "@cnbc-monorepo/entity";

export const ChangeLogsProvider = [
    {
      provide: 'CHANGE_LOGS_REPOSITORY',
      useValue: ChangeLogs,
    },
  ];