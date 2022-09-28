import express from "express";

const router = express.Router();

router.get("/", async(_:express.Request, res: express.Response) => {
    res.status(200).json({ "name": "Hello, World!" })
})

export default router;