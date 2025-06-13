import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Reflector } from '@nestjs/core';
import * as express from 'express';
import { TransformInterceptor } from 'src/common/shared/interceptors/transform.interceptor';

export function initAppConfig(app: NestExpressApplication) {
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(express.json({ limit: '10mb' }));
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
  );
  app.enableCors();
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  app.useStaticAssets(join(__dirname, '../../..', 'assets'), {
    prefix: '/assets/',
  });
}
