import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateFacultyInput } from './create-faculty.input';

@InputType()
export class UpdateFacultyInput extends CreateFacultyInput {
  @Field(() => Int)
  id: number;
}
