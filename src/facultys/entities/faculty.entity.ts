import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Department } from 'src/departments/entities/department.entity';

@ObjectType()
export class Faculty {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID, { nullable: true })
  faculty: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
  @Field(() => [Department], { nullable: true })
  readonly departments: Department[];
}
