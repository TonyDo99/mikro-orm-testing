// Libs importing
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

// Common functions importing
import { validationConfig } from 'src/common/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), '.env'),
      validationSchema: validationConfig,
    }),
  ],
})
export class ConfigsModule {}
