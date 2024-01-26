const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

const createPetition = (req, res, next) => {
  Controller.createPetition(req.body)
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
router.post("/create", createPetition);
router.get("/list", petitionList);
router.patch("/:id", updatePetition);
router.delete("/:id", removePetition);

module.exports = router;
