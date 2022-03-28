import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class SubscriberStrategy extends PassportStrategy(Strategy,'SubscriberStrategy') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret-key',
    });
  }

  async validate(payload: any) {
    if (payload.subscriber) {
      return { isSubscriber: true, data: payload.subscriber };
    }
		return { isSubscriber: false, data: payload.user };

  }
}
