// Libs importing
import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

// Arguments importing
import { HistoricalMarketBodyArgs } from './historical-market-extend.args';

@ArgsType()
export class HistoricalMarketArgs extends HistoricalMarketBodyArgs {
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
