import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => ID)
  department: string;
  @Field(() => ID)
  faculty: string;
}
