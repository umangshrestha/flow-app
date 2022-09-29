import { Request, Response, NextFunction } from "express";

interface IParams {
    offset?: string,
    limit?: string,
}

const parseIntOrUndefined = (val?: string) => parseInt(val) || undefined;

const getId = (req: Request) => req.params.id ?
    { id: parseIntOrUndefined(req.params.id) } :
    { uwinID: req.params.uwinID };

export namespace handler {

    export const Get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let query = req.query as IParams;
            let where = getId(req);
            const skip = parseIntOrUndefined(query.offset);
            const take = parseIntOrUndefined(query.limit);
            const func: CallableFunction = req.model.findMany;
            let out = await func({ skip, take, where });
            res.status(200).json(out);
        } catch (err) {
            next(err)
        }
    }

    export const Post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const func: CallableFunction = req.model.create;
            let resp = await func({ data: req.body });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    }

    export const Delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let where = getId(req);
            const func: CallableFunction = req.model.delete;
            let resp = await func({ where });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    }

    export const Put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let where = getId(req);
            const func: CallableFunction = req.model.update;
            let resp = await func({ where, data: req.body });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    }
}