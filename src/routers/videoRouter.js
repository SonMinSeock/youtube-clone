import express from "express";
import { deleteVideo, handleEdit, handleWatch, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", handleWatch);
videoRouter.get("/:id(\\d+)/edit", handleEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
