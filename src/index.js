import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import session from "express-session";
import { localMiddleware } from "./middlewares";
import MongoStore from "connect-mongo";
// application settings ...
const app = express();
// view engine pug setting.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);
// form의 데이터를 이해 힐수있도록 도와준다.
app.use(express.urlencoded({ extended: true }));

// 세션미들웨어
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// 로컬 미들웨어
app.use(localMiddleware);

// Static files serving
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
// Routers
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
