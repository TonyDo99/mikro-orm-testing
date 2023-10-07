import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';
import { PortfolioEntity } from 'src/entities';
import { PortfolioService } from './portfolio.service';

@Resolver()
export class PortfolioResolver {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Mutation(() => PortfolioEntity)
  async createPortfolio(
    @Args('createPortfolioInput') createPortfolioInput: CreatePortfolioInput,
  ): Promise<number> {
    try {
      return await this.portfolioService.createPortfolio(createPortfolioInput);
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }

  @Query(() => [PortfolioEntity], { name: 'portfolios' })
  async findPortfolios(): Promise<PortfolioEntity[]> {
    try {
      return await this.portfolioService.findPortfolios();
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }

  @Query(() => PortfolioEntity, { name: 'portfolio' })
  async findPortfolioById(
    @Args('portfolioEmail', { type: () => String, nullable: false })
    portfolioEmail: string,
  ): Promise<PortfolioEntity> {
    try {
      return await this.portfolioService.findPortfolioByEmail(portfolioEmail);
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }

  @Mutation(() => PortfolioEntity)
  async updatePortfolio(
    @Args('updatePortfolioInput')
    updatePortfolioInput: UpdatePortfolioInput,
  ): Promise<PortfolioEntity> {
    try {
      return await this.portfolioService.updatePortfolio(
        updatePortfolioInput.email,
        updatePortfolioInput,
      );
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }

  @Mutation(() => Number)
  async removePortfolio(
    @Args('portfolioId', { type: () => Int }) portfolioId: number,
  ): Promise<number> {
    try {
      return await this.portfolioService.removePortfolio(portfolioId);
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }
}
