const express = require("express");
const chalk = require("chalk");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

console.log("\x1b[33m%s\x1b[0m", "hi!");
console.log(chalk.greenBright("hi!"));

const server = app.listen(3000, () =>
  console.log(chalk.greenBright("Server is ready!"))
);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
