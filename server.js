const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

const oranges = ["orange", "orange"];
oranges.forEach((fruit) => {
  console.count(fruit);
});

const server = app.listen(3000, () => console.log("Server is ready!"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated!");
  });
});
