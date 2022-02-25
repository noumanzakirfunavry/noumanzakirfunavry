import { Module } from '@nestjs/common';
import { SessionsProvider } from '../providers/sessions.provider';
import { UsersHasRightsProvider } from '../providers/users.has.rights.provider';
import { UsersProvider } from '../providers/users.provider';

@Module({
  providers: [...UsersProvider,...SessionsProvider,...UsersHasRightsProvider],
  exports: [...UsersProvider,...SessionsProvider,...UsersHasRightsProvider]
})
export class ProvidersModule {}
