const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to backend");
});

app.listen(8080, (req, res) => {
  console.log("listening on 8080");
});
