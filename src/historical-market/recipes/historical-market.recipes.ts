// Libs importing
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class FeedTopic {
  @Field(() => String, {
    nullable: true,
  })
  topic: string;

  @Field(() => String, {
    nullable: true,
  })
  relevance_score: string;
}

@ObjectType()
class FeedTickerSentiment {
  @Field(() => String, {
    nullable: true,
  })
  ticker: string;

  @Field(() => String, {
    nullable: true,
  })
  relevance_score: string;

  @Field(() => String, {
    nullable: true,
  })
  ticker_sentiment_score: string;

  @Field(() => String, {
    nullable: true,
  })
  ticker_sentiment_label: string;
}

@ObjectType()
class MarketFeed {
  @Field(() => String, {
    nullable: true,
  })
  title: string;

  @Field(() => String, {
    nullable: true,
  })
  url: string;

  //   TODO: Config scalar date time format YYYYMMDDTHHMM
  @Field(() => String, {
    nullable: true,
  })
  time_published: string;

  @Field(() => [String])
  authors: string[];

  @Field(() => [String], {
    nullable: true,
  })
  summary: string[];

  @Field(() => String, {
    nullable: true,
  })
  banner_image: string;

  @Field(() => String, {
    nullable: true,
  })
  source: string;

  @Field(() => String, {
    nullable: true,
  })
  category_within_source: string;

  @Field(() => String, {
    nullable: true,
  })
  source_domain: string;

  @Field(() => [FeedTopic])
  topics: FeedTopic[];

  @Field(() => Number)
  overall_sentiment_score: number;

  @Field(() => String, {
    nullable: true,
  })
  overall_sentiment_label: string;

  @Field(() => [FeedTickerSentiment])
  ticker_sentiment: FeedTickerSentiment[];
}

@ObjectType()
export class HistoricalMarketRecipes {
  @Field(() => String, {
    nullable: true,
  })
  items: string;

  @Field(() => String, {
    nullable: true,
  })
  sentiment_score_definition: string;

  @Field(() => String, {
    nullable: true,
  })
  relevance_score_definition: string;

  @Field(() => [MarketFeed], {
    nullable: true,
  })
  feed: MarketFeed[];
}
