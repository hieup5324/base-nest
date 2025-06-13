import { MethodNotAllowedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function RejectMethodMiddleware(
  request: Request,
  _: Response,
  next: NextFunction,
) {
  const { method } = request;
  const allowMethod = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];
  if (!allowMethod.includes(method)) {
    throw new MethodNotAllowedException('Phương thức truy cập không hợp lệ');
  }
  next();
}
