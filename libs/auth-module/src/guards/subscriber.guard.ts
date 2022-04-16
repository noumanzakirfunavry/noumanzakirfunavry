import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_SUBSCRIBER_KEY } from '../decorators/subscriber.decorator';

@Injectable()
export class SubscriberAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isSubscriberOnlyRoute = this.reflector.getAllAndOverride<boolean>(
      IS_SUBSCRIBER_KEY,
      [context.getHandler(), context.getClass()]
    );
    
    if (isSubscriberOnlyRoute) {
      const { user } = context.switchToHttp().getRequest();
      

      return user.subscriber;
    }
  }
}
