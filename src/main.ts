// Libs importing
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';

// Modules importing
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT');

  await app.get(MikroORM).getSchemaGenerator().ensureDatabase();
  await app.get(MikroORM).getSchemaGenerator().updateSchema();

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await app.listen(+PORT, () =>
    console.log(`Server now listening on port ${PORT}`),
  );
}
bootstrap();
