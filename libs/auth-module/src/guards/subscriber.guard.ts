import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_SUBSCRIBER_KEY } from '../decorators/subscriber.decorator';

@Injectable()
export class SubscriberAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isSubscriber = this.reflector.getAllAndOverride<boolean>(
      IS_SUBSCRIBER_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (isSubscriber) {
      const { user } = context.switchToHttp().getRequest();

      return user.isSubscriber;
    }
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
