//const express = require("express"); // CommonJS
//const { hiCall, hiRole } = require("./queue"); // CommonJS

import express from "express"; //   ES6 module
import { hiCall, hiRole } from "./queue-es6.js"; // ES6 module

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

console.log(hiCall()); // ES6 module
console.log(hiRole()); // ES6 module

const server = app.listen(3000, () => console.log("Server is ready!"));
