import {getUsers, addUsers, updateUsers, deleteUsers} from "../controllers/users.js";
import {loginUser} from "../controllers/loginUsers.js";

import express from "express";

const router = express.Router();

router.post("/login", loginUser);

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);


export default router;