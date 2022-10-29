import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { FacultyEntity } from 'src/facultys/entities/faculty.entity';

@ObjectType()
export class DepartmentEntity {
  @Field(() => Int)
  readonly id: number;
  @Field(() => ID)
  department: string;
  @Field(() => FacultyEntity)
  faculty: String 
}
