import { CreateFormSectionInput } from './create-form-section.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateFormSectionInput extends PartialType(CreateFormSectionInput) {
  @Field(() => Int)
  id: number;
  @Field(() => ID, {nullable: true})
  parentTopic?: string;
}
