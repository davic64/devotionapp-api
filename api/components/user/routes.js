const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

const signUp = (req, res, next) => {
  Controller.createUser(req.body)
    .then((user) => {
      response.success(res, user);
    })
    .catch(next);
};

// Routes
router.post("/create", signUp);

module.exports = router;
