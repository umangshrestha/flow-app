import express from "express";
import { handler } from "@middleware/handler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";

let router = express.Router();

export default router
    .use(addmodel(db.topic))
    .get("/:id?", handler.Get)
    .post("/", handler.Post)
    .delete("/:id", handler.Delete)
    .put("/:id", handler.Put)
