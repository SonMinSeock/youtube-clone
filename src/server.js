import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();

// view engine settings ...
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// application settings...
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// Server listening
const handleListening = () => console.log(`✅ Server Listening on Port http://localhost:${PORT}`);

app.listen(PORT, handleListening);