import { ObjectType, Field, ID } from '@nestjs/graphql';
import { DepartmentEntity } from 'src/departments/entities/department.entity';

@ObjectType()
export class InstructorEntity {
  @Field(() => ID)
  id: string;
  @Field(() => ID)
  email: string;
  @Field(() => ID)
  fullName: string;
  @Field(()=>DepartmentEntity)
  department: DepartmentEntity
}