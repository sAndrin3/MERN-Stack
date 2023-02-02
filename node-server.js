 const http = require("http")

 const server = http.createServer((req, res) => {
    // Routes
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>Homepage...</h2>");
        res.end();

    }
    if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>Aboutpage...</h2>");
        res.end();

    }
 });

 server.listen("5000", "localhost", () => {
    console.log("Server running on port 5000")
 });

 // 127.0.0.1 = localhost
 // port 5000