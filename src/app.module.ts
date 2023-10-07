// Libs importing
import { Module } from '@nestjs/common';

// Modules importing
import { HistoricalMarketModule } from './historical-market/historical-market.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { OrmModule } from './modules/orm.module';
import { GraphqlModule } from './modules/graphql.module';
import { ConfigsModule } from './modules/config.module';

@Module({
  imports: [
    ConfigsModule,
    GraphqlModule,
    OrmModule,
    HistoricalMarketModule,
    PortfolioModule,
  ],
})
export class AppModule {}
