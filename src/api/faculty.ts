import express from "express";
import { handler } from "@middleware/requesthandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";

let router = express.Router();

export default router
    .use(addmodel(db.faculty))
    .get("/:uwinID?", handler.Get)
    .post("/", handler.Post)
    .delete("/:uwinID", handler.Delete)
    .put("/:uwinID", handler.Put)
