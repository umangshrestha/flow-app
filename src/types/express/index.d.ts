import { Prisma } from "@prisma/client"
import { DB } from "../db"

export { }

declare global {
    namespace Express {
        export interface Request {
            model?: DB.Any,
        }
    }
}