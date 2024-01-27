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
    const devotionals = store.list(Devotional, {}, [
      { model: User, as: "user", where: { location } },
    ]);
    return devotionals;
  };

  const removeDevotional = async (id) => {
    store.destroy(Devotional, id);
  };

  return {
    getDevotional,
    getDevotionalsList,
    upsertDevotional,
    removeDevotional,
  };
};
