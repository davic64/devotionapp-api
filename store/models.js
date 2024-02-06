const { User, UserSchema } = require("../api/components/user/model");
const { Topic, TopicSchema } = require("../api/components/topic/model");
const {
  Devotional,
  DevotionalSchema,
} = require("../api/components/devotional/model");
const {
  Petition,
  PetitionSchema,
} = require("../api/components/petition/model");

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Topic.init(TopicSchema, Topic.config(sequelize));
  Devotional.init(DevotionalSchema, Devotional.config(sequelize));
  Petition.init(PetitionSchema, Petition.config(sequelize));

  // Associates
  Devotional.associate(sequelize.models);
  Petition.associate(sequelize.models);
};

module.exports = setupModels;
