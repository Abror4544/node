const express = require("express"); // CommonJS

if (1 === 1) {
  const foo = require("./queue"); // CommonJS

  console.log(foo.hiMan()); // CommonJS
  console.log(foo.hiGirl()); // CommonJS
}

// import express from "express"; -   ES6 module
// import hiMan from "./queue.js"; - ES6 module

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

const server = app.listen(3000, () => console.log("Server is ready!"));
