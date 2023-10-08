// Libs importing
import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsBoolean, IsEnum, IsISO8601, IsOptional } from 'class-validator';

// Types importing
import { DATA_TYPE, OUT_PUT_SIZE } from '../types/historical-market.type';

@ArgsType()
export class HistoricalMarketBodyArgs {
  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  adjusted?: boolean;

  @Field(() => Boolean, {
    nullable: true,
    defaultValue: true,
  })
  @IsOptional()
  @IsBoolean()
  extended_hours?: boolean;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  @IsOptional()
  @IsISO8601()
  month?: Date;

  @Field(() => String, {
    nullable: true,
    defaultValue: OUT_PUT_SIZE.COMPACT,
  })
  @IsOptional()
  @IsEnum(OUT_PUT_SIZE)
  outputsize?: OUT_PUT_SIZE;

  @Field(() => String, {
    nullable: true,
    defaultValue: DATA_TYPE.JSON,
  })
  @IsOptional()
  @IsEnum(DATA_TYPE)
  datatype?: DATA_TYPE;
}
