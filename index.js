const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes/index.js")(app);

module.exports = app;