const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

const upsertDevo = (req, res, next) => {
  Controller.upsertDevotional(req.body, req.params.id)
    .then((devotional) => {
      response.success(res, devotional, 201);
    })
    .catch(next);
};

const getDevo = (req, res, next) => {
  Controller.getDevotional(req.params.id)
    .then((devotional) => {
      response.success(res, devotional);
    })
    .catch(next);
};

const getDevosList = (req, res, next) => {
  Controller.getDevotionalsList(req.query.location)
    .then((devotionals) => {
      response.success(res, devotionals);
    })
    .catch(next);
};

// ROUTES
router.get("/list", getDevosList);
router.get("/detail/:id", getDevo);
router.patch("/:id?", upsertDevo);

module.exports = router;
