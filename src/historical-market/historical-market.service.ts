import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HistoricalMarketInputs } from './dto/historical-market.args';
import { HistoricalMarketRecipes } from './recipes/historical-market.recipes';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HistoricalMarketService {
  async getHistoricalMarket(
    historicalMarketInputs: HistoricalMarketInputs,
  ): Promise<HistoricalMarketRecipes> {
    const config = new ConfigService();

    const { apiKey, limit = 50, functional, ...rest } = historicalMarketInputs;

    const { data } = await axios.get(config.get('API_END_POINT'), {
      params: {
        apikey: apiKey,
        function: functional,
        limit,
        ...rest,
      },
    });

    return data;
  }
}
