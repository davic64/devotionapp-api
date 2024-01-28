const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require("./secure");

const router = Router();

const upsertDevo = (req, res, next) => {
  Controller.upsertDevotional(
    { ...req.body, userId: req.userAuth.id },
    req.params.id
  )
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

const removeDevo = (req, res, next) => {
  Controller.removeDevo(req.params.id)
    .then(() => {
      response.success(res, "", 204);
    })
    .catch(next);
};

// ROUTES
router.get("/list", secure("logged"), getDevosList);
router.get("/detail/:id", secure("logged"), getDevo);
router.delete("/remove/:id", secure("owner"), removeDevo);
router.patch("/:id?", secure("owner"), upsertDevo);

module.exports = router;
