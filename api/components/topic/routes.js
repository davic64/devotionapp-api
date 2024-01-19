const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

const getTopic = (req, res, next) => {
  Controller.getTopic(req.params.id)
    .then((topic) => {
      response.success(res, topic);
    })
    .catch(next);
};

const topicList = (req, res, next) => {
  Controller.getTopicsList()
    .then((topics) => {
      response.success(res, topics);
    })
    .catch(next);
};

// ROUTES
router.get("/list", topicList);
router.get("/:id", getTopic);

module.exports = router;
