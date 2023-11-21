const express = require("express");
const app = express();

//Route Import 
const log = require("../routes/LogRoute");

app.use("/api/v1",log);


module.exports = app;