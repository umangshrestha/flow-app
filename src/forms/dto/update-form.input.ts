import { CreateFormInput } from './create-form.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateFormInput extends PartialType(CreateFormInput) {
  @Field(() => Int)
  id: number;
}
