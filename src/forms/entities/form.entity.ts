import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { FormSection } from 'src/form-section/entities/form-section.entity';

@ObjectType()
export class Form {
  @Field(() => Int)
  id: number;
  @Field(() => ID)
  name: string;
  @Field(() => ID)
  description: string;
  @Field(() => ID)
  parentTopic: string;
  @Field(() => Boolean)
  isDefault: boolean;
  @Field(() => [FormSection])
  sections: FormSection[]
}
