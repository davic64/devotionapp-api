const { User, UserSchema } = require("../api/components/user/model");

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
};

module.exports = setupModels;
