import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Instructor {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
