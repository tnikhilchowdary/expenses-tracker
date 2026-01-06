import express from "express";
import dotenv from "dotenv";


const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Welcome to the Expenses Tracker");
})

app.listen(PORT, () => {
    console.log("Server is running on PORT");
})