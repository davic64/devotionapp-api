const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require("./secure");

const router = Router();

const createTopic = (req, res, next) => {
  Controller.createTopic(req.body)
    .then((topic) => {
      response.success(res, topic, 201);
    })
    .catch(next);
};

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
router.post("/create", secure("logged"), createTopic);
router.get("/list", secure("logged"), topicList);
router.get("/:id", secure("logged"), getTopic);

module.exports = router;
