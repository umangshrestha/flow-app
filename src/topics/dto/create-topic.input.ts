import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateTopicInput {
  @Field(() => ID)
  topic: string;
  @Field(() => ID)
  parentTopic: string;
}
