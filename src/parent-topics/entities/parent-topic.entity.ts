import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Topic } from 'src/topics/entities/topic.entity';

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
  @Field(() => [Topic], { nullable: true })
  majorTopics: [Topic];
}
