const express = require("express");
const chalk = require("chalk");
const ProgressBar = require("progress");
const fs = require("fs");

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

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return; // and we don't want to go any further
      }
      resolve(data);
    });
  });
};

getFile("./queue.js")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.error(err));
