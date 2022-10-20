import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class FormSection {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
  @Field(() => ID)
  formType: string;
  @Field(() => ID)
  paceholder: string;
  @Field(() => Boolean)
  isRequred: boolean;
  @Field(() => ID)
  helpInfo: string;
  @Field(() => [ID])
  items: string[];
}
