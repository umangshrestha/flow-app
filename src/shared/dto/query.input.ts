import { InputType, Field, ID } from '@nestjs/graphql';
import { Order } from '../interface/interface';

@InputType()
export class QueryInput {
    @Field(() => ID, { defaultValue: 0 })
    skip: number;
    @Field(() => ID, { defaultValue: 50 })
    take: number;
    @Field(() => ID, { defaultValue: "id" })
    orderBy: string;
    @Field(() => Order, { defaultValue: Order.ASC })
    sortOrder: string;
}
