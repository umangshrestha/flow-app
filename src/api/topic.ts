import express from "express";
import { handler } from "@middleware/requesthandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";
import { topicSanitizer } from "@sanitizer/topic";
import sanitizer from "@middleware/sanitizer";

let router = express.Router();

export default router
    .use(addmodel(db.topic))
    .get("/:id?", topicSanitizer, sanitizer, handler.Get)
    .post("/",  topicSanitizer, sanitizer, handler.Post)
    .delete("/:id", topicSanitizer, sanitizer,  handler.Delete)
    .put("/:id",  topicSanitizer, sanitizer, handler.Put)
