import { InputType } from '@nestjs/graphql';
import { CreatePortfolioInput } from './create-portfolio.input';

@InputType()
export class UpdatePortfolioInput extends CreatePortfolioInput {}
