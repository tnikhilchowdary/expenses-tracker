import express from "express";
import dotenv from "dotenv";
import config from "./db/config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
config();
app.get("/", (req, res) => {
    res.send("Welcome to the Expenses Tracker");
})

app.listen(PORT, () => {
    console.log("Server is running on PORT");
})