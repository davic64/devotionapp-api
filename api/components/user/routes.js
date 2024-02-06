const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require("./secure");

const router = Router();

const signUp = (req, res, next) => {
  Controller.createUser(req.body)
    .then((user) => {
      response.success(res, user, 201);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  Controller.getUser(req.params.id)
    .then((user) => {
      response.success(res, user);
    })
    .catch(next);
};

const usersList = (req, res, next) => {
  Controller.getUsersList(req.query.location)
    .then((users) => {
      response.success(res, users);
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  Controller.updateUser(req.params.id, req.body)
    .then((user) => {
      response.success(res, user);
    })
    .catch(next);
};

// Routes
router.post("/create", signUp);
router.get("/list", secure("logged"), usersList);
router.get("/:id", secure("logged"), getUser);
router.patch("/:id", secure("owner"), updateUser);

module.exports = router;
