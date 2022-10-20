import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Department {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => ID)
  department: string;
  @Field(() => ID)
  faculty: string;
  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
}
