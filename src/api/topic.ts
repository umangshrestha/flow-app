import express from "express";
import { handleRequest as hr } from "@utils/responsehandler";
import addmodel from "@middleware/addmodel";
import db from "@utils/dbconn";

let router = express.Router();

export default router
    .use(addmodel(db.topic))
    .get("/:id?", hr.get)
    .post("/", hr.post)
    .delete("/:id", hr.delete)
    .put("/:id", hr.put)
