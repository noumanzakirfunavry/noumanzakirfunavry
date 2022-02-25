import { SetMetadata } from '@nestjs/common';
import {RightsTypes} from '@cnbc-monorepo/enums'

export const RIGHTS_KEY = 'rights';
export const Rights = (...rights: RightsTypes[]) => SetMetadata(RIGHTS_KEY, rights);