require("dotenv").config();
const config = require("../config");

const USER = encodeURIComponent(config.db.username);
const PASSWORD = encodeURIComponent(config.db.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.name}`;

module.exports = {
  url: URI,
  dialect: config.db.dialect,
};
