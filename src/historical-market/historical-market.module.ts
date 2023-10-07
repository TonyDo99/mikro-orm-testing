// Libs importing
import { Module } from '@nestjs/common';

// Services importing
import { HistoricalMarketService } from './historical-market.service';

// Resolvers importing
import { HistoricalMarketResolver } from './historical-market.resolver';

@Module({
  providers: [HistoricalMarketResolver, HistoricalMarketService],
})
export class HistoricalMarketModule {}
