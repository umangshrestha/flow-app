import logger from "@logger";
import { count } from "console";
import { Request, Response, NextFunction } from "express";

export namespace handler {

    export const Get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let { offset: skip, limit: take } = req.query;
            delete req.query.offset;
            delete req.query.limit;
            let where = req.params;
            Object.assign(where, req.query);
            const func: CallableFunction = req.model.findMany;
            let out = await func({ skip, take, where , include: {_count: true}});
            out.forEach((element: any) => {
                element._count = element._count.query;
            });
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
            let where = req.params;
            const func: CallableFunction = req.model.delete;
            let resp = await func({ where });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    }

    export const Put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let where = req.params;
            const func: CallableFunction = req.model.update;
            let resp = await func({ where, data: req.body });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    }
}