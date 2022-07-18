const express = require("express"); // CommonJS
const { hiMan, hiGirl } = require("./queue"); // CommonJS

// import express from "express"; -   ES6 module
// import hiMan from "./queue.js"; - ES6 module

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

console.log(hiMan()); // CommonJS
console.log(hiGirl()); // CommonJS

const server = app.listen(3000, () => console.log("Server is ready!"));
