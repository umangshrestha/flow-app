import { formattedDateTime } from "@utils/time";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {

    console.log("[DEBUG]", formattedDateTime(), ":", req.method, "@", req.originalUrl)
    console.table({
        params: JSON.stringify(req.params),
        body: JSON.stringify(req.body),
        query: JSON.stringify(req.query),
    });
    next();
}
