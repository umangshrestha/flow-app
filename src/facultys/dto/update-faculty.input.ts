import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class UpdateFacultyInput {
  @Field(() => Int)
  id: number;
  @Field(() => ID)
  faculty: string;
  
}
