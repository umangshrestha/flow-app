import { CreateParentTopicInput } from './create-parent-topic.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParentTopicInput extends PartialType(CreateParentTopicInput) {
  @Field(() => Int)
  id: number;
}

