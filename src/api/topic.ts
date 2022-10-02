import express from "express";
import { handler } from "@middleware/requesthandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";
import { GetValidator, IdValidator, PutValidator, PostValidator } from "@sanitizer/topic";
import sanitizer from "@middleware/sanitizer";

let router = express.Router();

export default router
    .use(addmodel(db.topic))
    .get("/", GetValidator, handler.Get)
    .get("/:id?", IdValidator, sanitizer, handler.GetByID)
    .post("/", PostValidator, sanitizer, handler.Post)
    .delete("/:id", IdValidator, sanitizer, handler.Delete)
    .put("/:id", PutValidator, sanitizer, handler.Put)
