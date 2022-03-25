import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { RightsGuard } from '../guards/rights.guard';
import { RolesGuard } from '../guards/roles.guard';
import { SubscriberAuthGuard } from '../guards/subscriber.guard';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { SubscriberStrategy } from '../strategies/subscriber.strategy';

@Module({
  controllers: [],
  providers: [
    JwtStrategy,
    SubscriberStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: 'Subscriber_Guard',
      useClass: SubscriberAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RightsGuard,
    },
  ],
  exports: [
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  imports: [
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModuleModule {}
