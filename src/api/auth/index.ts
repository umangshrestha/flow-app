import express from "express";
import signup from "./signup";

const router = express.Router();

router.post("/signup", signup);

export default router;