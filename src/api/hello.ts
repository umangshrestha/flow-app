import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
    res.status(200).json({ "name": "Hello, World!" })
})

export default router;