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
  const stream = fs.createReadStream(`${__dirname}/queue.js`);
  stream.pipe(res);
  res.send("Hi!");
});

if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
}

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
