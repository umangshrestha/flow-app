import { isDevelopment } from "@config/settings";
import { Prisma } from "@prisma/client";
import { formattedDateTime } from "@utils/time";
import { Request, Response, NextFunction } from "express";

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (isDevelopment()) {
        console.log(error);
        console.log("[ERROR]", formattedDateTime(), ":", req.method, "@", req.originalUrl);
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        let msg:any = error.meta.cause;
        msg ||= (error.code === "P2002")? "duplicate entry": "unknown";
        res.status(422).json({
            error: msg,
            code: error.code
        })
    } else {
        res.status(500).json({ error: "ERROR" });
    }
}


