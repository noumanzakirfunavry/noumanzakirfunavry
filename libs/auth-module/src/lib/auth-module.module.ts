import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategies/jwt.strategy';

@Module({
  controllers: [],
  providers: [JwtStrategy],
  exports: [
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '10h' },
    }),],
  imports: [
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '10h' },
    }),
  ]
})
export class AuthModuleModule { }
