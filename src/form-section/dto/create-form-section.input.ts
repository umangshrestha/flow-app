import { InputType, Int, Field, ID } from '@nestjs/graphql';


@InputType()
export class CreateFormSectionInput {
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
