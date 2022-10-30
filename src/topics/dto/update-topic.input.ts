import { CreateTopicInput } from './create-topic.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTopicInput extends PartialType(CreateTopicInput) {
  @Field(() => Int)
  id: number;
  @Field(() => ID)
  tag: string;
}
