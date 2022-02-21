import { Module } from '@nestjs/common';
import { UsersProvider } from '../providers/users.provider';

@Module({
  providers: [...UsersProvider],
  exports: [...UsersProvider]
})
export class ProvidersModule {}
