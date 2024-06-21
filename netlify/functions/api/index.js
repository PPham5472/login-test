import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();
api.use("/api/", router);

router.get("/login", (req, res) => {
    const { body } = req;
    console.log("test", body);
});
router.get("/hello", (req, res) => res.send("Hello World!"));

export const handler = serverless(api);
