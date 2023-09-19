const express = require("express");

const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("This is home page.");
});

app.post("/", (req, res) => {
  res.send("This is home page with post request.");
});

// PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
