import express from "express";

const PORT = 4000;

const app = express();

// application settings...

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.send("I love Middleware");
};

app.use(logger);

app.get("/", handleHome);

// Server listening
const handleListening = () => console.log(`✅ Server Listening on Port http://localhost:${PORT}`);

app.listen(PORT, handleListening);