const express = require("express");
const app = express();

/* This is the former BODY-PARSER which provides req.body */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Define a route */
app.use(require("./routes"));

module.exports = app;