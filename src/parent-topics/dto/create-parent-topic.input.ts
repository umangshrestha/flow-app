import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateParentTopicInput {
    @Field(() => ID)
    topic: string;
  }
  

