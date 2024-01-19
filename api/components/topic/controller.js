const { Topic } = require("./model");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const getTopic = async (id) => {
    const topic = store.get(Topic, { id });
    return topic;
  };

  const getTopicsList = async () => {
    const topics = store.list(Topic);
    return topics;
  };

  return {
    getTopic,
    getTopicsList,
  };
};
