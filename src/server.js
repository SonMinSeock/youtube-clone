import express from "express";

const PORT = 4000;

const app = express();

// application settings...
const handleHome = (req, res) => {
    return res.send("I still love you.");
};

const handleLogin = (req, res) => {
    return res.send("Login Page Soon");
}

app.get("/", handleHome);

app.get("/login", handleLogin);

// Server listening
const handleListening = () => console.log(`✅ Server Listening on Port http://localhost:${PORT}`);

app.listen(PORT, handleListening);