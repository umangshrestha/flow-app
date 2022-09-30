import {  Prisma } from "@prisma/client";
import logger from "@logger";
import { Request, Response, NextFunction } from "express";

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    logger.warn(req.method, req.originalUrl);
    logger.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        let msg: any = error.meta.cause;
        msg ||= (error.code === "P2002") ? "duplicate entry" : "unknown";
        res.status(422).json({
            error: msg,
            code: error.code
        })
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
        let msg = (error.errorCode === "P2002") ? "duplicate entry" : "unknown";
        res.status(422).json({
            error: msg,
            code: error.errorCode
        })
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError){
        res.status(422).json({
            error: error.message,
        })
    }else {
        res.status(500).json({ error: error });
    }
}


