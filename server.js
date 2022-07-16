const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

console.log("My %s has %d ears", "cat", 2);
console.log("I am %i years old", "21.4");
console.log("%o", console);

const server = app.listen(3000, () => console.log("Server is ready!"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
