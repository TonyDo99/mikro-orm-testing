// Libs importing
import { PrimaryKey, Property, t } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseEntity {
  @PrimaryKey({ type: t.integer, autoincrement: true })
  @Field(() => Number)
  id!: number;

  @Field(() => Date)
  @Property({ length: 3, defaultRaw: 'current_timestamp(3)' })
  createdAt: Date = new Date();

  @Field(() => Date)
  @Property({
    onUpdate: () => new Date(),
    length: 3,
    defaultRaw: 'current_timestamp(3)',
  })
  updatedAt: Date = new Date();
}
