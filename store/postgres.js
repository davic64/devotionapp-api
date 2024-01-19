const Sequelize = require("sequelize");
const config = require("../config");
const setupModels = require("./models");

const sequelize = new Sequelize(
  config.db.name,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    logging: false,
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected");
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log("❌ DB connection error: ", error);
    setTimeout(connection, 2000);
  }
};

connection();

setupModels(sequelize);

// Services
const create = async (data) => {
  try {
    return await data.save();
  } catch (error) {
    return error;
  }
};

const list = async (Model, filters = {}) => {
  try {
    const dataList = await Model.findAll({
      where: filters,
    });
    return dataList;
  } catch (error) {
    return error;
  }
};

const get = async (Model, item) => {
  try {
    const uniqueData = await Model.findOne({ where: item });
    return uniqueData;
  } catch (error) {
    return error;
  }
};

const update = async (Model, id, data) => {
  try {
    const dataUpdate = await Model.update(data, {
      where: {
        id,
      },
      returning: true,
    });
    return dataUpdate[1][0];
  } catch (error) {
    return error;
  }
};

const destroy = async (Model, id) => {
  try {
    await Model.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  create,
  list,
  get,
  update,
  destroy,
};
