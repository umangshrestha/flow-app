import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { TagEntity } from 'src/tags/entities/tag.entity';

@ObjectType()
export class TopicEntity {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  topic: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
  @Field(() => TagEntity, { nullable: true })
  tag: TagEntity;
}
