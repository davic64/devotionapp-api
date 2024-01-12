const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("API Init");
});

app.listen(8080, () => {
  console.log(`Listening on http://localhost:8080`);
});
