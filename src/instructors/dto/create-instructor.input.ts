import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateInstructorInput {
  @Field(() => ID)
  id: string;
  @Field(() => ID)
  department: string;
  @Field(() => ID)
  email: string;
  @Field(() => ID)
  fullName: string;
}
