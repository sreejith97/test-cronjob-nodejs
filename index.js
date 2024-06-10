// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Import your cron job logic
require("./cron");

app.get("/d", (req, res) => {
  res.send("Hello from your cron job!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
