// app.js
const express = require("express");
const app = express();

// Define a simple route for the home page
app.get("/", (req, res) => {
  res.send("Hello, World is updated");
});

// Start the server and listen on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
