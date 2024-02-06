const { Topic } = require("./model");
const createSlug = require("../../../utils/createSlug");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const createTopic = async (userData) => {
    const newTopic = new Topic(userData);
    newTopic.slug = createSlug(userData.title);

    const topic = await store.create(newTopic);
    return topic;
  };

  const getTopic = async (slug) => {
    const topic = store.get(Topic, { slug });
    return topic;
  };

  const getTopicsList = async () => {
    const topics = store.list(Topic);
    return topics;
  };

  return {
    createTopic,
    getTopic,
    getTopicsList,
  };
};
