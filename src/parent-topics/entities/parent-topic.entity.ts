import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ParentTopic {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  topic: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
}
