const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

const server = app.listen(3000, () => console.log(process.env));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
