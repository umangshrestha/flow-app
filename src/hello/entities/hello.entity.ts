import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Hello {
  @Field(() => ID)
  name: string;
}
