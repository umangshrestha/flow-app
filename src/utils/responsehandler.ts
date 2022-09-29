import express, { Request, Response, NextFunction } from "express";
import db from "src/utils/dbconn";
import { Prisma } from '@prisma/client'


interface IQuery {
    id?: string,
    uwinID?: string,
}

interface IParams {
    offset?: string,
    limit?: string,
}


const parseIntOrUndefined = (val?: string) => parseInt(val) || undefined;
export const handleRequest = {

    get: async (req: Request<any, any, IQuery, IParams>, res: Response, next: NextFunction) => {
        try {
            let where = { id: parseIntOrUndefined(req.params.id) };
            const { offset, limit } = req.query;
            const skip = parseIntOrUndefined(offset);
            const take = parseIntOrUndefined(limit);
            let out = await req.model.findMany({ skip, take, where });
            res.status(200).json(out);
        } catch (err) {
            next(err)
        }
    },

    post: async (req: Request, res: Response, next: NextFunction) => {
        try {
            let resp = await req.model.create({ data: req.body });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    },

    delete: async (req: Request<any, any, any, IParams>, res: Response, next: NextFunction) => {
        try {
            const where = {
                id: parseIntOrUndefined(req.params.id),
                uwinID: req.params.uwinID
            }; 
            let resp = await req.model.delete({ where });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    },

    put: async (req: Request<any, any, any, IParams>, res: Response, next: NextFunction) => {
        try {
            let where = {
                id: parseIntOrUndefined(req.params.id),
                uwinID: req.params.uwinID
            };
            let resp = await req.model.update({ where, data: req.body });
            res.status(201).json(resp);
        } catch (err) {
            next(err)
        }
    },
}