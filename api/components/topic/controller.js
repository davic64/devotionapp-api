const { Topic } = require("./model");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const createTopic = async (userData) => {
    const newTopic = new Topic(userData);
    const topic = await store.create(newTopic);
    return topic;
  };

  const getTopic = async (id) => {
    const topic = store.get(Topic, { id });
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
