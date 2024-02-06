const { DataTypes, Model } = require("sequelize");

const PETITION_TABLE = "petitions";

const PetitionSchema = {
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
  tag: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
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
};

class Petition extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PETITION_TABLE,
      modelName: "Petition",
      timestamps: false,
    };
  }
}

module.exports = {
  PETITION_TABLE,
  PetitionSchema,
  Petition,
};
