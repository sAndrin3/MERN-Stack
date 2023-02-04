const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("<h2>Welcome to the Home Page...</h2>")
});
app.get("/about", (req, res) => {
    res.send("<h2>Welcome to the About status Page...</h2>")
});
app.listen("5000", () => {
    console.log("Server running on port 5000");
});