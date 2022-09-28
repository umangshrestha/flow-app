import express from "express";
import db from "@utils/dbconn";
import { handleRequest as hr } from "@utils/responsehandler";

let model = db.topic;

export default 
    express
    .Router()
    .get("/:id?", async (req, res) => hr.get(req, res, model.findMany))
    .post("/", async (req, res) => hr.post(req, res, model.create))
    .delete("/:id", async (req, res) => hr.delete(req, res, model.delete))
    .put("/:id", async (req, res) => hr.put(req, res, model.update))

