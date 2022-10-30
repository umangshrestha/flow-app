import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlowInput {
  @Field(() => ID)
  createdBy: string;
  @Field(()=>[ID])
  topics: string[];
  @Field(() => ID)
  description: string;
  @Field(() => [ID])
  tags: string[];
  @Field(() => ID)
  uwinID: string;
  @Field(() => ID, {defaultValue: "BB Cafe"})
  location: string;
}
