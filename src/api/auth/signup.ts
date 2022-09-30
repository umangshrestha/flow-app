import db from "@utils/dbconn";
import { hashPassword } from "@utils/validator";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        body.password = await hashPassword(body.password);
        const user = await db.user.create({ data: req.body })
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}