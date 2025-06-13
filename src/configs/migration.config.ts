import { config } from 'dotenv';
config();
import { DataSource } from 'typeorm';
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

export default new DataSource({
  // name: AppEnv.DB_READ,
  type: AppEnv.DB_TYPE as any,
  host: AppEnv.DB_HOST,
  port: +AppEnv.DB_PORT,
  database: AppEnv.DB_DATABASE,
  // database: AppEnv.DB_READ,
  username: AppEnv.DB_USERNAME,
  password: AppEnv.DB_PASSWORD,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
  timezone: 'Z',
  ssl,
});
