import express, { Router } from "express";
import serverless from "serverless-http";

const users = [
    { email: "test@applausehq.com", password: "test1234!", name: "Test User" },
    { email: "peter@applausehq.com", password: "Cookies123!", name: "Peter Pham" },
];

const api = express();
const router = Router();
api.use(express.json());
api.use("/api/", router);

router.post("/login", (req, res) => {
    const { body } = req;

    const currentUser = users.filter((user) => user.email === body.email)[0];
    if (!currentUser) return res.status(400).json({ status: "failed", error: "Invalid Login" });

    if (currentUser?.password === body.password) {
        return res
            .status(200)
            .json({ status: "success", user: { email: currentUser?.email, name: currentUser?.name } });
    }

    return res.status(400).json({ status: "failed", error: "Invalid Login 2" });
});

export const handler = serverless(api);
