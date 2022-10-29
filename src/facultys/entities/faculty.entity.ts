import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { DepartmentEntity } from 'src/departments/entities/department.entity';

@ObjectType()
export class FacultyEntity {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  faculty: string;
  @Field(() => ID, { nullable: true })
  code: string;
  @Field(() => [DepartmentEntity], { nullable: true })
  readonly departments: DepartmentEntity[];
}
