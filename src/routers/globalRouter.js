import express from "express";
import { join } from "../controllers/userController";
import { handleHome } from "../controllers/videoController";

const globalRouter = express.Router();


globalRouter.get("/", handleHome);
globalRouter.get("/join", join);

export default globalRouter;