import { CreateFlowInput } from './create-flow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFlowInput extends CreateFlowInput {
  @Field(() => Int)
  id: number;
}
