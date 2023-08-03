import express from "express";
const router = express.Router();
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

router.get("/", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
