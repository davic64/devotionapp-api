const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require("./secure");

const router = Router();

const createPetition = (req, res, next) => {
  Controller.createPetition({ ...req.body, userId: req.userAuth.id })
    .then((petition) => {
      response.success(res, petition, 201);
    })
    .catch(next);
};

const petitionList = (req, res, next) => {
  Controller.getPetitionsList()
    .then((petitions) => {
      response.success(res, petitions);
    })
    .catch(next);
};

const updatePetition = (req, res, next) => {
  Controller.updatePetition(req.params.id, req.body)
    .then((petition) => {
      response.success(res, petition);
    })
    .catch(next);
};

const removePetition = (req, res, next) => {
  Controller.removePetition(req.params.id)
    .then(() => {
      response.success(res, "", 204);
    })
    .catch(next);
};

// ROUTES
router.post("/create", secure("logged"), createPetition);
router.get("/list", secure("logged"), petitionList);
router.patch("/:id", secure("owner"), updatePetition);
router.delete("/:id", secure("owner"), removePetition);

module.exports = router;
