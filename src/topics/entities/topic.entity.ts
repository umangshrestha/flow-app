import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ParentTopic } from 'src/parent-topics/entities/parent-topic.entity';

@ObjectType()
export class Topic {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  topic: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
  @Field(() => ParentTopic, { nullable: true })
  parentTopic: ParentTopic;
  
}
