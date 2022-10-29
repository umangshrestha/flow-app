import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Department } from 'src/departments/entities/department.entity';

@ObjectType()
export class FacultyEntity {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  faculty: string;
  @Field(() => ID, { nullable: true })
  code: string;
  @Field(() => [Department], { nullable: true })
  readonly departments: Department[];
}
