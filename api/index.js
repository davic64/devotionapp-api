const express = require("express");
require("dotenv").config();
const cors = require("cors");
const config = require("../config");
const errors = require("../network/errors");
const auth = require("./components/auth/routes");
const user = require("./components/user/routes");
const topic = require("./components/topic/routes");
const devotional = require("./components/devotional/routes");
const petition = require("./components/petition/routes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("API Init");
});

// ROUTES
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/topic", topic);
app.use("/api/devotional", devotional);
app.use("/api/petition", petition);

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`🚀 Listening on http://localhost:${config.api.port}`);
});
