import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initAppConfig } from './configs/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupSwagger } from './configs/swagger.config';
import { RejectMethodMiddleware } from './common/shared/middlewares/reject-method.middleware';
import { SqlInjectionMiddleware } from './common/shared/middlewares/sql-injection.middleware';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(RejectMethodMiddleware);
  app.use(SqlInjectionMiddleware);
  initAppConfig(app);
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
