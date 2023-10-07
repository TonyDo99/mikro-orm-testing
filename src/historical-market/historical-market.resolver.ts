import { Resolver, Query, Args } from '@nestjs/graphql';
import { HistoricalMarketService } from './historical-market.service';
import { HistoricalMarketInputs } from './dto/historical-market.args';
import { HistoricalMarketRecipes } from './recipes/historical-market.recipes';
import { GraphQLError } from 'graphql';

@Resolver()
export class HistoricalMarketResolver {
  constructor(
    private readonly historicalMarketService: HistoricalMarketService,
  ) {}

  @Query(() => HistoricalMarketRecipes)
  async getHistoryMarket(
    @Args()
    historicalMarketInputs: HistoricalMarketInputs,
  ): Promise<HistoricalMarketRecipes> {
    try {
      const data = await this.historicalMarketService.getHistoricalMarket(
        historicalMarketInputs,
      );

      return data;
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }
}
