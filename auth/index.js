// Index Auth
const jwt = require("jsonwebtoken");
const config = require("../config");
const error = require("../utils/error");

const secret = config.jwt.secret;

const sign = (data) => {
  return jwt.sign(data, secret);
};

const verify = (token) => jwt.verify(token, secret);

const check = {
  own: (req, owner) => {
    const decoded = decodedHeader(req);
    if (decoded.id !== parseInt(owner)) {
      throw error("No permissions", 401);
    }
  },

  logged: (req) => {
    decodedHeader(req);
  },
};

const getToken = (auth) => {
  if (!auth) {
    throw error("No token", 404);
  }

  if (auth.indexOf("Bearer ") === -1) {
    throw error("Invalid format");
  }

  const token = auth.replace("Bearer ", "");
  return token;
};

const decodedHeader = (req) => {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.userAuth = decoded;

  return decoded;
};

module.exports = {
  sign,
  check,
};
