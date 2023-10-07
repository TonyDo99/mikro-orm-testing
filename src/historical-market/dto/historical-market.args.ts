import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { HistoricalMarketBodyInput } from './historical-market-extend.args';

@ArgsType()
export class HistoricalMarketInputs extends HistoricalMarketBodyInput {
  @Field(() => String, {
    defaultValue: 'NEWS_SENTIMENT',
  })
  @IsNotEmpty()
  @IsString()
  functional: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  apiKey: string;
}
