import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateFacultyInput {
  @Field(() => ID, )
  faculty: string;
}
