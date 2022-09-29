import express from "express";
import { handleRequest as hr } from "@utils/responsehandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";

let router = express.Router();

export default router
    .use(addmodel(db.faculty))
    .get("/:uwinID?", hr.get)
    .post("/", hr.post)
    .delete("/:uwinID", hr.delete)
    .put("/:uwinID", hr.put)
