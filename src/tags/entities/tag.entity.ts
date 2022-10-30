import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { TopicEntity } from 'src/topics/entities/topic.entity';

@ObjectType()
export class TagEntity {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  tag: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
  @Field(() => [TopicEntity], { nullable: true })
  topics: [TopicEntity];
}
