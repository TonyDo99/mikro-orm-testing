// Libs importing
import { Resolver, Query, Args } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

// Services importing
import { HistoricalMarketService } from './historical-market.service';

// Arguments importing
import { HistoricalMarketArgs } from './dto/historical-market.args';

// Recipes importing
import { HistoricalMarketRecipes } from './recipes/historical-market.recipes';

@Resolver()
export class HistoricalMarketResolver {
  constructor(
    private readonly historicalMarketService: HistoricalMarketService,
  ) {}

  @Query(() => HistoricalMarketRecipes)
  async getHistoryMarket(
    @Args()
    historicalMarketArgs: HistoricalMarketArgs,
  ): Promise<HistoricalMarketRecipes> {
    try {
      const data = await this.historicalMarketService.getHistoricalMarket(
        historicalMarketArgs,
      );

      return data;
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }
}
