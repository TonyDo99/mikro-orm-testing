// Libs importing
import { InputType } from '@nestjs/graphql';

// Input types importing
import { CreatePortfolioInput } from './create-portfolio.input';

@InputType()
export class UpdatePortfolioInput extends CreatePortfolioInput {}
