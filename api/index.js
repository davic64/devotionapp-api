const express = require("express");
const config = require("../config");
const errors = require("../network/errors");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API Init");
});

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`🚀 Listening on http://localhost:${config.api.port}`);
});
