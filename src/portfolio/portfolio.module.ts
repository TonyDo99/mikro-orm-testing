// Libs importing
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

// Entities importing
import entities from 'src/entities';

// Services importing
import { PortfolioService } from './portfolio.service';

// Resolvers importing
import { PortfolioResolver } from './portfolio.resolver';

@Module({
  imports: [MikroOrmModule.forFeature(entities)],
  providers: [PortfolioResolver, PortfolioService],
})
export class PortfolioModule {}
