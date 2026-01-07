import {getUsers, addUsers} from "../controllers/users.js";

import express from "express";

const router = express.Router();
router.get("/", getUsers);
router.post("/", addUsers);


export default router;