const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

const login = (req, res, next) => {
  const { email, password } = req.body;

  Controller.login(email, password)
    .then((token) => {
      response.success(res, token);
    })
    .catch(next);
};

// Routes
router.post("/login", login);

module.exports = router;
