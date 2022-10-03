import { handler } from "@middleware/requesthandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";
import { postSanitizer } from "@sanitizer/post";
import sanitizer from "@middleware/sanitizer";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

const Post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const uwinID: string = data.uwinID;
        delete data.uwinID;
        const topics: { [key: string]: number }[] = data.topic.map((x: number | string) => {
            return { id: x };
        });
        delete data.topic;
        const out = await db.post.create({
            data: {
                ...req.body,
                faculty: { connect: { uwinID } },
                topic: { connect: topics },
            }
        });
        res.status(200).json(out);
    } catch (err) {
        next(err)
    }
}

export default router
    .use(addmodel(db.post))
    .get("/", postSanitizer, sanitizer, handler.Get)
    .get("/:id", postSanitizer, sanitizer, handler.GetByID)
    .post("/", postSanitizer, sanitizer, Post)
    .delete("/:id", postSanitizer, sanitizer, handler.Delete)
    .put("/:id", postSanitizer, sanitizer, handler.Put)
