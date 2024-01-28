const { Petition } = require("./model");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const createPetition = async (petitionData) => {
    console.log(petitionData);
    const newPetition = new Petition(petitionData);
    const petititon = await store.create(newPetition);
    return petititon;
  };

  const getPetitionsList = async () => {
    const petititons = store.list(Petition);
    return petititons;
  };

  const updatePetition = async (id, data) => {
    const petition = store.update(Petition, id, data);
    return petition;
  };

  const removePetition = async (id) => {
    store.destroy(Petition, id);
  };

  return {
    createPetition,
    getPetitionsList,
    updatePetition,
    removePetition,
  };
};
