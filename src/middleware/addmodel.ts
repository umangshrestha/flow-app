import { Request, Response, NextFunction } from "express";
import { DB } from "src/types/db";

export default (model: DB.Any) => {

    return async (req: Request, _: Response, next: NextFunction) => {
        req.model = model;
        next();
    }
}