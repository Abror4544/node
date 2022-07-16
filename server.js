const express = require("express");
const chalk = require("chalk");
const ProgressBar = require("progress");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

const bar = new ProgressBar(":bar", { total: 100 });

const timer = setInterval(async () => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);

    server = app.listen(3000, () =>
      console.log(chalk.greenBright("Server is ready!"))
    );
  }
}, 1);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
