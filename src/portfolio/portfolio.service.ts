import { Injectable } from '@nestjs/common';
import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { PortfolioEntity } from 'src/entities';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PortfolioEntity)
    private readonly portfolioEntity: EntityRepository<PortfolioEntity>,
  ) {}

  async createPortfolio(
    createPortfolioInput: CreatePortfolioInput,
  ): Promise<any> {
    await this.portfolioEntity
      .createQueryBuilder()
      .insert(createPortfolioInput)
      .execute();

    const user = await this.portfolioEntity.findOne({
      email: createPortfolioInput.email,
    });

    return user;
  }

  async findPortfolioByEmail(portfolioEmail: string): Promise<PortfolioEntity> {
    const user = await this.portfolioEntity.findOne({ email: portfolioEmail });

    if (!user) throw new Error(`Could not find portfolio ${portfolioEmail}`);

    return user;
  }

  async findPortfolios(): Promise<PortfolioEntity[]> {
    return (await this.portfolioEntity.createQueryBuilder().select('*')).sort(
      (a, b) => a.id - b.id,
    );
  }

  async updatePortfolio(
    portfolioEmail: string,
    updatePortfolioInput: UpdatePortfolioInput,
  ): Promise<PortfolioEntity> {
    const user = await this.findPortfolioByEmail(portfolioEmail);

    const reNewOne = {
      ...user,
      ...updatePortfolioInput,
    };

    const updated = await this.portfolioEntity
      .createQueryBuilder()
      .update(reNewOne)
      .where({
        email: portfolioEmail,
      })
      .select('*')
      .execute('get');

    return updated;
  }

  async removePortfolio(portfolioId: number) {
    const deleted = await this.portfolioEntity.nativeDelete({
      id: portfolioId,
    });

    return deleted;
  }
}
