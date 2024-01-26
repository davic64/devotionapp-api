"use strict";
const { UserSchema, USER_TABLE } = require("../../api/components/user/model");
const {
  TopicSchema,
  TOPIC_TABLE,
} = require("../../api/components/topic/model");
const {
  DevotionalSchema,
  DEVOTIONAL_TABLE,
} = require("../../api/components/devotional/model");
const {
  PetitionSchema,
  PETITION_TABLE,
} = require("../../api/components/petition/model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(TOPIC_TABLE, TopicSchema);
    await queryInterface.createTable(DEVOTIONAL_TABLE, DevotionalSchema);
    await queryInterface.createTable(PETITION_TABLE, PetitionSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(TOPIC_TABLE);
    await queryInterface.dropTable(DEVOTIONAL_TABLE);
    await queryInterface.dropTable(PETITION_TABLE);
  },
};
