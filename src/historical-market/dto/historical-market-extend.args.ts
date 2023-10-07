// Libs importing
import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, Max } from 'class-validator';

// Types importing
import { SORT_TYPES, TOPICS } from '../types/historical-market.type';

// Commons importing
import { ERRORS_RESPONSE } from 'src/common/errors';

@ArgsType()
export class HistoricalMarketBodyArgs {
  // TODO: Check convention sending field, Example: tickers=COIN,CRYPTO:BTC,FOREX:USD
  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  tickers?: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsEnum(TOPICS)
  topics?: string;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  time_from?: typeof GraphQLISODateTime;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  time_to?: typeof GraphQLISODateTime;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsEnum(SORT_TYPES)
  sort?: string;

  @Field(() => Number, {
    nullable: true,
    defaultValue: 50,
  })
  @IsOptional()
  @Max(1000, {
    message: ERRORS_RESPONSE.OUT_LIMIT_STRING,
  })
  limit?: number;
}
