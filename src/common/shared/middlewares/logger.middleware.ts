import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from '../loggers/custom-logger.util';
import { IRequestLogging } from '../interfaces/IRequestLogging';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new CustomLogger(LoggerMiddleware.name);

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl, params, body, query } = request;

    response.on('finish', () => {
      const { statusCode } = response;

      const log: IRequestLogging = {
        url: originalUrl,
        method,
        statusCode,
        body,
        params,
        query,
      };

      this.logger.log(JSON.stringify(log));
    });

    next();
  }
}
