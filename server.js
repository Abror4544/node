const express = require("express");
const chalk = require("chalk");
const ProgressBar = require("progress");
const EventEmitter = require("events");
const fs = require("fs");

require("dotenv").config();

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`Loading ${start} to ${end}`);
});

eventEmitter.emit("start", 1, 100);

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

fs.stat("./queue.js", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats.isSymbolicLink()); // false
  console.log(stats.size); // 1024000 //= 1MB
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
