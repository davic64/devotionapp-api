const { DataTypes, Model } = require("sequelize");

const DEVOTIONAL_TABLE = "devotionals";

const DevotionalSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      notNull: true,
      isUUID: 4,
    },
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
  content: {
    allowNull: true,
    type: DataTypes.JSON,
  },
  draft: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    field: "userId",
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: "users",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  topicId: {
    field: "topicId",
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: "topics",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
};

class Devotional extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Topic, { as: "topic" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEVOTIONAL_TABLE,
      modelName: "Devotional",
      timestamps: false,
    };
  }
}

module.exports = {
  DEVOTIONAL_TABLE,
  DevotionalSchema,
  Devotional,
};
