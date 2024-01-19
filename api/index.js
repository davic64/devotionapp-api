const express = require("express");
require("dotenv").config();
const config = require("../config");
const errors = require("../network/errors");
const auth = require("./components/auth/routes");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API Init");
});

// ROUTES
app.use("/api/auth", auth);

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`🚀 Listening on http://localhost:${config.api.port}`);
});
