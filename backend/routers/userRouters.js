import {getUsers, addUsers, updateUsers, deleteUsers} from "../controllers/users.js";

import express from "express";

const router = express.Router();
router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);


export default router;