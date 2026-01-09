import express from "express";
import dotenv from "dotenv";
import config from "./db/config.js";
import userRouter from "./routers/userRouters.js";
import cors from "cors";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
const PORT = process.env.PORT;
config();
app.get("/", (req, res) => {
    res.send("Welcome to the Expenses Tracker");
})

app.listen(PORT, () => {
    console.log("Server is running on PORT");
})