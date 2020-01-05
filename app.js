const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

/* This is the former BODY-PARSER which provides req.body */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Setting up EJS as view engine */
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
app.set("layout", "layouts/main");
app.use(ejsLayouts);
app.use(express.static("public"));

/* Define a route */
app.use(require("./routes"));

module.exports = app;