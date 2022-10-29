import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateFacultyInput {
  @Field(() => ID)
  department: string;
  @Field(() => ID)
  faculty: string;
}
