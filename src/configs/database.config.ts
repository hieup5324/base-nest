import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppEnv } from '../constants/app.constant';
import { SnakeNamingStrategy } from 'src/utils/snake-naming.strategy';

let ssl: {
  ca: string;
} | null = null;

if (AppEnv.DB_SSL === 'true') {
  ssl = {
    ca: AppEnv.DB_CA as string,
  };
}

const CONNECTION_LIMIT = 100;
const IDLE_TIMEOUT = 30000;
const ssl_read = ssl;

if (AppEnv.DB_SSL_READ === 'true') {
  ssl = {
    ca: AppEnv.DB_CA_READ as string,
  };
}

export const databaseConfig = {
  type: AppEnv.DB_TYPE as any,
  host: AppEnv.DB_HOST,
  port: AppEnv.DB_PORT,
  database: AppEnv.DB_DATABASE,
  username: AppEnv.DB_USERNAME,
  password: AppEnv.DB_PASSWORD,
  logging: AppEnv.ENABLE_QUERY_LOG,
  synchronize: AppEnv.ENABLE_DB_SYNC,
  autoLoadEntities: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [__dirname + '/../**/*.entity.ts'],
  ssl,
  extra: {
    waitForConnections: true,
    connectionLimit: CONNECTION_LIMIT,
    queueLimit: 0,
    idleTimeout: IDLE_TIMEOUT,
  },
};
