import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

// make express application.
const app = express();
// application settings ...
// view engine pug setting.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);
// form의 데이터를 이해 힐수있도록 도와준다.
app.use(express.urlencoded({extended: true}));

// Routers
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
    console.log(`🎸 Server Listening on Port http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); 