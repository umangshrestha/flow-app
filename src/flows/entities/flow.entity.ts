import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { TagEntity } from 'src/tags/entities/tag.entity';
import { TopicEntity } from 'src/topics/entities/topic.entity';

@ObjectType()
export class FlowEntity {
  @Field(() => Int)
  id: number;
  @Field(() => ID)
  createdBy: number;
  @Field(()=>[TopicEntity])
  topics: TopicEntity[];
  @Field(() => ID)
  description: string;
  @Field(() => [TagEntity])
  tags: TagEntity[];
  @Field(() => ID)
  uwinID: string;
}
