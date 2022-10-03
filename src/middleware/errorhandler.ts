import { Prisma } from "@prisma/client";
import logger from "@logger";
import { Request, Response, NextFunction } from "express";

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    logger.warn(req.method, req.originalUrl);
    logger.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        let msg: any = error.meta.cause;
        if (!msg) {
            switch (error.code) {
                case "P2002":
                    msg = "duplicate entry";
                    break;
                case "P2021":
                    msg = "database does not exist";
                    break;
                default:
                    msg = "unknown";
            }

        }
        res.status(422).json({
            error: msg,
            type: "KnownRequestError",
            code: error.code
        })
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
        let msg = (error.errorCode === "P2002") ? "duplicate entry" : "unknown";
        res.status(422).json({
            error: msg,
            type: "InitializationError",
            code: error.errorCode
        })
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        res.status(422).json({
            type: "UnknownRequestError",
            error: error.message,
        })
    } else {
        res.status(500).json({ type: typeof error, error: error.message });
    }
}


