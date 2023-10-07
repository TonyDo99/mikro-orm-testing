import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioResolver } from './portfolio.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import entities from 'src/entities';

@Module({
  imports: [MikroOrmModule.forFeature(entities)],
  providers: [PortfolioResolver, PortfolioService],
})
export class PortfolioModule {}
