import { Logger } from '@nestjs/common';
import { PortfolioEntity } from './entities';
import { ConfigService } from '@nestjs/config';
import { defineConfig } from '@mikro-orm/core';

const logger = new Logger('MikroORM');

const config = new ConfigService();

export default defineConfig({
  type: config.get('DB_TYPE'),
  host: config.get('DB_HOST'),
  dbName: config.get('DB_NAME'),
  user: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  port: +config.get('DB_PORT'),
  entities: [PortfolioEntity],
  debug: true,
  logger: logger.log.bind(logger),
});
