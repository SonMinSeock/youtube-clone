import express from "express";
import { edit, see } from "../controllers/userController";

const userRouter = express.Router();

const handleDelete = (req, res) => res.send("Delete User");

userRouter.get("/:id(\\d+)", see);
userRouter.get("/edit", edit);
userRouter.get("/delete", handleDelete);
export default userRouter;