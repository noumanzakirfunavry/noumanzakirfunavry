import { HttpStatus } from '@nestjs/common';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private static logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, baseUrl } = request;
    const id = request.get('uuid');
    if (!baseUrl.includes('health-check')) {
      if (method === 'GET' || method === 'DELETE') {
        AppLoggerMiddleware.logger.log(
          `${id}: -REQUEST- : ${method} path: ${baseUrl} PARAMS: ` +
            JSON.stringify(request.params) +
            ` QUERY_PARAMS: ` +
            JSON.stringify(request.query),
        );
      } else {
        AppLoggerMiddleware.logger.log(
          `${id}: -REQUEST- : ${method} path: ${baseUrl} BODY: ` +
            JSON.stringify(request.body) +
            ` QUERY_PARAMS: ` +
            JSON.stringify(request.query),
        );
      }

      const oldWrite = response.write,
        oldEnd = response.end;
      const chunks = [];
      response.write = function (chunk) {
        chunks.push(chunk);
        return oldWrite.apply(response, arguments);
      };
      response.end = function (chunk) {
        if (chunk) chunks.push(chunk);
        let body;
        if (response.statusCode != 302) {
          body = Buffer.concat(chunks).toString('utf8');
        } else {
          body = 'redirection taken place';
        }
        if (response.statusCode === undefined) {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        AppLoggerMiddleware.logger.log(
          `${id}: -RESPONSE- : ${method} path: ${baseUrl} Code: ${response.statusCode}  BODY:  ${body}`,
        );
        oldEnd.apply(response, arguments);
      };
    }
    next();
  }
}
