import express, { Request, Response } from "express";
import db from "src/utils/dbconn";
import { Prisma } from '@prisma/client'


interface IId {
    id?: number,
    uwinID?: string
};

export const handleRequest = {

    get: async (req: Request, res: Response, findMany: CallableFunction) => {
        try {
            let where: IId = {};
            where.id = parseInt(req.params.id) || null;
            where.uwinID = req.params.uwinID;
            const { offset: skip, limit: take } = req.query as { [key: string]: string };
            let topics = await findMany({
                skip: parseInt(skip) || undefined,
                take: parseInt(take) || undefined,
                where, 
            });
            res.status(200).json(topics);
        } catch (e) {
            console.log(e)
            res.status(500).json({ error: e.name });
        }
    },

    post: async (req: express.Request, res: express.Response, create: CallableFunction) => {
        try {
            let resp = await create({ data: req.body });
            res.status(201).json(resp);
        } catch (e) {
            console.log(e)
            if (e instanceof Prisma.PrismaClientKnownRequestError
                && e.code === 'P2002')
                res.status(422).json({ error: "duplicate topic", code: e.code })
            else
                res.status(500).json({ error: e.name });
        }
    },

    delete: async (req: express.Request, res: express.Response, del: CallableFunction) => {
        try {
            let where: IId = {};
            where.id = parseInt(req.params.id) || null;
            where.uwinID = req.params.uwinID;
            let resp = await del({ where });
            res.status(201).json(resp);
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError
                && e.code === 'P2025')
                res.status(422).json({ error: "duplicate topic", code: e.code })
            else
                res.status(500).json({ error: e.name });
        }
    },

    put: async (req: express.Request, res: express.Response, update: CallableFunction) => {
        try {
            let where: IId = {};
            where.id = parseInt(req.params.id) || null;
            where.uwinID = req.params.uwinID;
            console.log(where)
            let resp = await update({ where, data: req.body });
            res.status(201).json(resp);
        } catch (e) {
            console.log(e)
            if (e instanceof Prisma.PrismaClientKnownRequestError
                && e.code === 'P2025')
                res.status(422).json({ error: "duplicate topic", code: e.code })
            else
                res.status(500).json({ error: e.name });
        }
    },
}