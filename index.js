const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(8080, () => {
  console.log("Server is listening to port http://localhost:8080/");
});
