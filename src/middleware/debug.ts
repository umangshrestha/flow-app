import logger from "@logger";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {

    logger.debug(req.method, "@", req.originalUrl)
    logger.debug({
        params: JSON.stringify(req.params),
        body: JSON.stringify(req.body),
        query: JSON.stringify(req.query),
    });
    next();
}
