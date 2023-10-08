// Libs importing
import { ArgsType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

// Arguments importing
import { HistoricalMarketBodyArgs } from './historical-market-extend.args';
import { SET_INTERVAL } from '../types/historical-market.type';

@ArgsType()
export class HistoricalMarketArgs extends HistoricalMarketBodyArgs {
  @Field(() => String, {
    defaultValue: 'TIME_SERIES_INTRADAY',
  })
  @IsNotEmpty()
  @IsString()
  functional: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  apiKey: string;

  @Field(() => String, {
    defaultValue: 'IBM',
  })
  @IsNotEmpty()
  @IsString()
  tickers: string;

  @Field(() => String)
  @IsEnum(SET_INTERVAL)
  interval: SET_INTERVAL;
}
