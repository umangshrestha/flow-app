import { Prisma } from "@prisma/client"

export { }

type GlobalSettings = Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined;
declare global {
    namespace Express {
        export interface Request {
            model?: Prisma.TopicDelegate<GlobalSettings>,
        }
    }
}