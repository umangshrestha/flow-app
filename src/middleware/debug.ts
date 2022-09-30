import logger from "@logger";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {

    logger.info(req.method, " ", req.originalUrl);
    logger.debug("params", JSON.stringify(req.params));
    logger.debug("body", JSON.stringify(req.body));
    logger.debug("query", JSON.stringify(req.query));
    next();
}
