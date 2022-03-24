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
    if (payload.data) {
      return { isSubscriber: true, data: payload.data };
<<<<<<< HEAD
    }else{
      return {
        data: payload.user,
        rights: payload.rights,
        roles: payload.roles,
        sessionId: payload.sessionId,
      };
    }
=======
    } else {
			return true;
		}
>>>>>>> CNBC-162
  }
}
