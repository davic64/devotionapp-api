const { Devotional } = require("./model");
const { Topic } = require("../topic/model");
const { User } = require("../user/model");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const upsertDevotional = async (devoData, id) => {
    const topic = await store.get(Topic, { slug: devoData.topicSlug });
    const devotional = await store.upsert(
      Devotional,
      { ...devoData, likes: [], topicId: topic.id },
      id
    );
    return devotional;
  };

  const getDevotional = async (id) => {
    const devotional = store.get(Devotional, { id }, [
      { model: User, as: "user", where: {} },
    ]);
    return devotional;
  };

  const getDevotionalsList = async (location, topicId) => {
    const devotionals = store.list(Devotional, { topicId }, [
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
