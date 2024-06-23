import express, { Router } from "express";
import serverless from "serverless-http";

const users = [
    { email: "test@applausehq.com", password: "Test1234!", name: "Test User" },
    { email: "peter@applausehq.com", password: "Cookies123!", name: "Peter Pham" },
];

const api = express();
const router = Router();
api.use(express.json());
api.use("/api/", router);

router.post("/login", (req, res) => {
    const {
        body: { email, password },
    } = req;

    //Input Validation
    if (email.length < 1) {
        throw new Error("Invalid email");
    }
    if (password.length > 255)
        return res
            .status(400)
            .json({ status: "failed", error: "Password must be less than 255 characters long.", errorCode: "E1" });

    //Credentials Validation
    const currentUser = users.filter((user) => user.email === email)[0];
    if (!currentUser) return res.status(400).json({ status: "failed", error: "Email not found.", errorCode: "E2" });

    if (currentUser?.password === password) {
        return res
            .status(200)
            .json({ status: "success", user: { email: currentUser?.email, name: currentUser?.name } });
    }

    return res.status(400).json({ status: "failed", error: "Invalid Login", errorCode: "E3" });
});

export const handler = serverless(api);
