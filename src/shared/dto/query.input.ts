import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { Order } from '../interface/interface';

@InputType()
export class QueryInput {
    @Field(() => Int, { defaultValue: 0 })
    skip: number;
    @Field(() => Int, { defaultValue: 50 })
    take: number;
    @Field(() => ID, { defaultValue: "id" })
    orderBy: string;
    @Field(() => Order, { defaultValue: Order.ASC })
    sortOrder: string;
}
