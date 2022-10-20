import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Faculty } from 'src/facultys/entities/faculty.entity';

@ObjectType()
export class Department {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID)
  department: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
  @Field(() => Faculty, {nullable: true })
  faculty: Faculty 
}
