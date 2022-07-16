const express = require("express");
//const repl = require("repl");

require("dotenv").config();

//repl.start();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

console.log(process.argv);

const server = app.listen(3000, () => console.log("Server is ready!"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
