const { Devotional } = require("./model");
const { User } = require("../user/model");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const upsertDevotional = async (devoData, id) => {
    const devotional = await store.upsert(Devotional, devoData, id);
    return devotional;
  };

  const getDevotional = async (id) => {
    const devotional = store.get(Devotional, { id });
    return devotional;
  };

  const getDevotionalsList = async (location) => {
    const devotionals = store.list(Devotional, { location }, [
      { model: User, as: "user", where: { location } },
    ]);
    return devotionals;
  };

  const deleteDevotional = async (id) => {
    store.destroy(Devotional, id);
  };

  const updateLikes = async (Model, id, likes) => {
    const devotional = store.update(Model, id, likes);
    return devotional;
  };

  return {
    getDevotional,
    getDevotionalsList,
    upsertDevotional,
    deleteDevotional,
    updateLikes,
  };
};
