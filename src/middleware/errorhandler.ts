import { Prisma } from "@prisma/client";
import logger from "@logger";
import { NextFunction, Request, Response } from "express";

export default (error: Error, req: Request, res: Response, _: NextFunction) => {
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
            name: "DBKnownRequestError",
            errors: [msg],
        })
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
        let msg = (error.errorCode === "P2002") ? "duplicate entry" : "unknown";
        res.status(422).json({
            name: "DBInitializationError",
            erros: [msg]
        })
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        res.status(422).json({
            name: "DBUnknownRequestError",
            errors: [error.message],
        })
    } else {
        res.status(500).json({ name: "Unknown", errors: [error.message] });
    }
}


