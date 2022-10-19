import { registerEnumType } from "@nestjs/graphql";

export enum Order {
    ASC = "asc",
    DESC = "desc",
}

registerEnumType(Order, { name: 'Order' })


export const orderStateResolver: Record<keyof typeof Order, any> = {
    ASC: 0,
    DESC: 1,
};
