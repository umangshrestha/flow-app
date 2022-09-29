import express, { Request, Response, NextFunction } from "express";
import db from "@utils/dbconn";
import { handleRequest as hr } from "@utils/responsehandler";
import { Prisma } from "@prisma/client";

let router = express.Router();

router.use(async (req: Request, _: Response, next: NextFunction) => {
    req.model = db.topic;
    next();
})


export default router
    .get("/:id?", hr.get)
    .post("/", hr.post)
    .delete("/:id", hr.delete)
    .put("/:id", hr.put)

