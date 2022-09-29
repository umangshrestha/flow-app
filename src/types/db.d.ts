import { Prisma } from "@prisma/client"

type GlobalSettings = Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined;

export namespace DB {
    export type Topic = Prisma.TopicDelegate<GlobalSettings>;
    export type User = Prisma.UserDelegate<GlobalSettings>;
    export type Faculty = Prisma.FacultyDelegate<GlobalSettings>;
    export type Query = Prisma.QueryDelegate<GlobalSettings>;

    export type Any = Topic | User| Query | Faculty;
}