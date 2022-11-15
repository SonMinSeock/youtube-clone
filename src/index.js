import express from "express";
import morgan from "morgan";
const PORT = 4000;

// make express application.
const app = express();

// application settings ...

const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("<h1>I still Love You 💜.</h1>");
}

const handleLogin = (req, res) => {
    return res.send("<h1>Login Page~ 🎸</h1>");
}

app.use(logger);
// app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
    console.log(`🎸 Server Listening on Port http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);