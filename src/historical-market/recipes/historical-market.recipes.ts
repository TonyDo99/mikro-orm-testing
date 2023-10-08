// Libs importing
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Metadata {
  @Field(() => String, {
    nullable: true,
  })
  information: string;

  @Field(() => String, {
    nullable: true,
  })
  symbol: string;

  @Field(() => String, {
    nullable: true,
  })
  lastRefreshed: string;

  @Field(() => String, {
    nullable: true,
  })
  interval: string;

  @Field(() => String, {
    nullable: true,
  })
  outputSize: string;

  @Field(() => String, {
    nullable: true,
  })
  timeZone: string;
}

@ObjectType()
export class TimeSeriesData {
  @Field(() => String, {
    nullable: true,
  })
  timeStamp: string;

  @Field(() => String, {
    nullable: true,
  })
  open: string;

  @Field(() => String, {
    nullable: true,
  })
  high: string;

  @Field(() => String, {
    nullable: true,
  })
  low: string;

  @Field(() => String, {
    nullable: true,
  })
  close: string;

  @Field(() => String, {
    nullable: true,
  })
  volume: string;
}

@ObjectType()
export class HistoricalMarketRecipes {
  @Field(() => Metadata, {
    nullable: true,
  })
  metaData: Metadata;

  @Field(() => [TimeSeriesData], {
    nullable: true,
  })
  timeSeries?: TimeSeriesData[];
}
