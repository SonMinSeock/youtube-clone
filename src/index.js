import express from "express";

const PORT = 4000;

const app = express();

// application settings ...

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
}

const privateMiddleware = (req, res, next) => {
    if (req.url === "/protected") return res.send("<h1>Not Allowed</h1>");

    console.log("Allowed, You may continue.");
    next();
}

const handleHome = (req, res) => {
    return res.send("<h1>I still Love You 💜.</h1>");
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => {
    console.log(`🎸 Server Listening on Port http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);