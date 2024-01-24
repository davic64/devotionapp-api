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

// ROUTES
router.patch("/:id?", upsertDevo);

module.exports = router;
