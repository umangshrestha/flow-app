import { CreateFacultyInput } from './create-faculty.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateFacultyInput extends CreateFacultyInput {
  @Field(() => Int)
  id: number;
}
