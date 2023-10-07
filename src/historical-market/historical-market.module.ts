import { Module } from '@nestjs/common';
import { HistoricalMarketService } from './historical-market.service';
import { HistoricalMarketResolver } from './historical-market.resolver';

@Module({
  providers: [HistoricalMarketResolver, HistoricalMarketService],
})
export class HistoricalMarketModule {}
