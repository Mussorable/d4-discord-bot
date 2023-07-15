const express = require("express");
const mongoose = require("mongoose");

const config = require("./config.json");
//

const app = express();

mongoose
  .connect(config.mongo)
  .then(() => app.listen(5173))
  .catch((error) => console.log(error));
