import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { CreateFormSectionInput } from 'src/form-section/dto/create-form-section.input';

@InputType()
export class CreateFormInput {
  @Field(() => ID)
  name: string;
  @Field(() => ID)
  description: string;
  @Field(() => ID)
  parentTopic: string;
  @Field(() => Boolean)
  isDefault: boolean;
  @Field(() => [CreateFormSectionInput])
  sections: CreateFormSectionInput[]
}
