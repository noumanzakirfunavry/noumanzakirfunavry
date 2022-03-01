import {AlexaAudio} from '@cnbc-monorepo/entity'

export const AlexaProvider = [
  {
    provide: 'ALEXA_REPOSITORY',
    useValue: AlexaAudio,
  },
];