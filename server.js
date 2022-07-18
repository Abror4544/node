const express = require("express"); // CommonJS
const foo = require("./queue"); // CommonJS

// import express from "express"; -   ES6 module
// import hiMan from "./queue.js"; - ES6 module

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

console.log(foo.hiMan()); // CommonJS
console.log(foo.hiGirl()); // CommonJS

const server = app.listen(3000, () => console.log("Server is ready!"));
