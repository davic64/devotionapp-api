const { User, UserSchema } = require("../api/components/user/model");
const { Topic, TopicSchema } = require("../api/components/topic/model");

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Topic.init(TopicSchema, Topic.config(sequelize));
};

module.exports = setupModels;
