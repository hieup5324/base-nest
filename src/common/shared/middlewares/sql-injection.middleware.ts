import { BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function SqlInjectionMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const regexSQLInjection = new RegExp(
    `(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|FETCH|DECLARE|GRANT|REVOKE|MERGE|SHOW|DESCRIBE|;|\"|'|[\*]|[\#])`,
  );
  const queryValues = Object.values(request.query);
  for (let i = 0; i < queryValues.length; i++) {
    if (regexSQLInjection.test(queryValues[i] as string))
      throw new BadRequestException(`Không được chứa ký đặc biệt trong url`);
  }
  next();
}
