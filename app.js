const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
// import routes
const postRoutes = require("./routes/posts");

// middleware to route traffic
app.use("/post", postRoutes);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db");
});
// listenong to server
app.listen(process.env.APP_PORT);
