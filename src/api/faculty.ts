import express from "express";
import { handler } from "@middleware/requesthandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";
import { facultySanitizer } from "@sanitizer/faculty";
import sanitizer from "@middleware/sanitizer";

let router = express.Router();

export default router
    .use(addmodel(db.faculty))
    .get("/",facultySanitizer, sanitizer, handler.Get)
    .get("/:uwinID",facultySanitizer, sanitizer, handler.GetByID)
    .post("/", facultySanitizer, sanitizer, handler.Post)
    .delete("/:uwinID", facultySanitizer, sanitizer, handler.Delete)
    .put("/:uwinID", facultySanitizer, sanitizer, handler.Put)
