import { CreateFacultyInput } from './create-faculty.input';
import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class UpdateFacultyInput extends CreateFacultyInput {
  @Field(() => ID)
  id: number;
}
