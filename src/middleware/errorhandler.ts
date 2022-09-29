import { Prisma } from "@prisma/client";
import { formattedDateTime } from "@utils/time";
import express, { Request, Response, NextFunction } from "express";

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("[ERROR]", formattedDateTime(), ":", req.method, "@", req.originalUrl);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
            res.status(422).json({ error: "duplicate", code: error.code })
        if (error.code === 'P2025')
            res.status(422).json({ error: "not found", code: error.code })
    } else {
        res.status(500).json({ error: "ERROR" });
    }
}


