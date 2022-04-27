import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RightsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const RIGHTS_KEY = 'rights';
    const requiredRights = this.reflector.getAllAndOverride<RightsTypes[]>(RIGHTS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRights) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

		// if user is super admin, bypass rights guard
		if(user.roles?.includes(RoleTypes.Super_Admin)){
			return true
		}

    return requiredRights.some((right) => user.rights?.includes(right));
  }
}