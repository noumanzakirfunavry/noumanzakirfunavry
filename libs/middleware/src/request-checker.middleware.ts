import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v1 } from 'uuid';

@Injectable()
export class RequestCheckerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.uuid) {
      req.headers.uuid = v1();
    }
    next();
  }
}
