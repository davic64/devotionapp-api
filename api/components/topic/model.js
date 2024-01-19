const { DataTypes, Model } = require("sequelize");

const TOPIC_TABLE = "topics";

const TopicSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  imgURL: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
  videoURL: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
};

class Topic extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TOPIC_TABLE,
      modelName: "Topic",
      timestamps: false,
    };
  }
}

module.exports = {
  TOPIC_TABLE,
  TopicSchema,
  Topic,
};
