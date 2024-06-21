import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();
api.use("/api/", router);

router.post("/login", (req, res) => {
    const { body } = req;
    console.log("test", body);
    res.send("Test");
});
router.get("/hello", (req, res) => res.send("Hello World!"));

export const handler = serverless(api);
