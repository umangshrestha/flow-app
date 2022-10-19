import { ObjectType, Field, Int } from '@nestjs/graphql';
import { defaultTypeResolver } from 'graphql';

@ObjectType()
export class Faculty {
  @Field(() => Int, { nullable: true })
  readonly id: number;
  @Field(() => Int, { nullable: true })
  faculty: number;

  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;
  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;

}
