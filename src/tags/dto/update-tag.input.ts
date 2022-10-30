import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTagInput{
  @Field(() => Int)
  id: number;
  @Field(() => ID)
  tag: string;
}

