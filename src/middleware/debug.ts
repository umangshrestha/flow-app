import { Prisma } from "@prisma/client";
import { formattedDateTime } from "@utils/time";
import express, {Request, Response, NextFunction} from "express";


const doNothing = (req: Request, res: Response, next: NextFunction) => next();


const displayDebug = (req: Request, res: Response, next: NextFunction) => {
    console.log("[DEBUG]", formattedDateTime(), ":", req.method, "@", req.originalUrl)

    console.table({
        params: JSON.stringify(req.params),
        body: JSON.stringify(req.body),
        query: JSON.stringify(req.query),
    });

    next();
}



export default (isDebug: boolean) => isDebug ? displayDebug : doNothing;
