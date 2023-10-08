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
  ): Promise<any> {
    const config = new ConfigService();

    const { apiKey, functional, tickers, interval, ...rest } =
      historicalMarketArgs;

    const { data } = await axios.get(config.get('API_END_POINT'), {
      params: {
        apikey: apiKey,
        function: functional,
        symbol: tickers,
        interval,
        ...rest,
      },
    });

    const timeSeries = data[`Time Series (${interval})`];

    const timeSeriess = Object.keys(timeSeries).map((date: string) => {
      const entry = timeSeries[date];
      return {
        timeStamp: date,
        open: parseFloat(entry['1. open']),
        high: parseFloat(entry['2. high']),
        low: parseFloat(entry['3. low']),
        close: parseFloat(entry['4. close']),
        volume: parseFloat(entry['5. volume']),
      };
    });
    console.log(
      '🚀 ~ file: historical-market.service.ts:45 ~ HistoricalMarketService ~ timeSeriess ~ timeSeriess:',
      timeSeriess,
    );

    const metadataKey = data['Meta Data'];

    const metadata = {
      information: metadataKey['1. Information'],
      symbol: metadataKey['2. Symbol'],
      lastRefreshed: metadataKey['3. Last Refreshed'],
      interval: metadataKey['4. Interval'],
      outputSize: metadataKey['5. Output Size'],
      timeZone: metadataKey['6. Time Zone'],
    };

    return {
      metaData: metadata,
      timeSeries: timeSeriess,
    };
  }
}
