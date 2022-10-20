import { CreateDepartmentInput } from './create-department.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDepartmentInput extends CreateDepartmentInput {
  @Field(() => Int)
  id: number;
}
