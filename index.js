const express = require("express");

const app = express();
const port = 8080;

app.use((req, res, next) => {
  req.user = "Guest";
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Apply middleware to /welcome route
app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server is listening to port http://localhost:${port}/`);
});
