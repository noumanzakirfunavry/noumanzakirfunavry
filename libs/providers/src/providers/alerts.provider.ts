import {Alerts} from '@cnbc-monorepo/entity'

export const AlertsProvider = [
  {
    provide: 'ALERTS_REPOSITORY',
    useValue: Alerts,
  },
];