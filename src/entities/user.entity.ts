// Libs importing
import { Entity, Index, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

// Entities importing
import { BaseEntity } from './base.entity';
@Entity()
@ObjectType()
export class PortfolioEntity extends BaseEntity {
  @Property({ columnType: 'text' })
  @Field(() => String)
  name: string;

  @Property({ unique: 'email_unique_name' })
  @Index({ name: 'email_index_name' })
  @Field(() => String)
  email: string;

  @Property({ columnType: 'text' })
  @Field(() => String)
  tickers: string;
}
