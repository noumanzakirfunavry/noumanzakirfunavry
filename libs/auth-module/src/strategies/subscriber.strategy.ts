import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class SubscriberStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret-key',
    });
  }

  async validate(payload: any) {
    console.log("🚀 ~ file: subscriber.strategy.ts ~ line 16 ~ SubscriberStrategy ~ validate ~ payload", payload)
    if (payload.data) {
      return { isSubscriber: true, data: payload.data };
    } else {
			return true;
		}
  }
}
