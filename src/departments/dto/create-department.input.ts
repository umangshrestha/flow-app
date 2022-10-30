import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => ID)
  department: string;
  @Field(() => ID, { defaultValue: "Unknown" })
  faculty: string;
}
