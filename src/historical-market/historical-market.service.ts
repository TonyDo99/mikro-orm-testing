// Libs importing
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

// Arguments importing
import { HistoricalMarketArgs } from './dto/historical-market.args';

// Recipes importing
import { HistoricalMarketRecipes } from './recipes/historical-market.recipes';

@Injectable()
export class HistoricalMarketService {
  async getHistoricalMarket(
    historicalMarketArgs: HistoricalMarketArgs,
  ): Promise<HistoricalMarketRecipes> {
    const config = new ConfigService();

    const { apiKey, limit = 50, functional, ...rest } = historicalMarketArgs;

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
