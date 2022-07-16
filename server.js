const express = require("express");

require("dotenv").config();

const app = express();

console.time('doSomething()');
app.get("/", (req, res) => {
  res.send("Hi!");
});
console.timeEnd('doSomething()');

const server = app.listen(3000, () => console.log("Server is ready!"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
