import { handler } from "@middleware/requesthandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";
import { querySanitizer } from "@sanitizer/query";
import sanitizer from "@middleware/sanitizer";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();
// import db from "@utils/dbconn";

// var id = 1;


// db.b.create({
//     data: {
//         c: true,
//         a: {
//             connect: {
//                 id: id
//             }
//         },
//     },
// }).then((x: any) => console.log(x))
//     .catch((x: any) => console.log("error", x))

// db.b.findMany().then(x => console.log(xsy))

const Post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const uwinID: string = data.uwinID;
        delete data.uwinID;
        const topics: { [key: string]: number }[] = data.topic.map((x: number | string) => {
            return { id: x };
        });
        console.log(uwinID)
        delete data.topic;
        const faculty = await db.faculty.update({
            where: { uwinID },
            data: {
                query: {
                    create: {
                        ...req.body,
                        topic: {
                            connect: topics,
                        },
                    }
                }
            }
        })
        // data.topic = {connect: topics}; 
        console.log(faculty)
        let out = await db.query.create({
            data: {
                ...data,
                faculty: { connect: { uwinID: faculty.uwinID } }
            },
        });

        res.status(200).json(out);
    } catch (err) {
        console.log(typeof err, err)
        next(err)
    }
}

export default router
    .use(addmodel(db.query))
    .get("/:id?", querySanitizer, sanitizer, handler.Get)
    .post("/", querySanitizer, sanitizer, Post)
    .delete("/:id", querySanitizer, sanitizer, handler.Delete)
    .put("/:id", querySanitizer, sanitizer, handler.Put)
