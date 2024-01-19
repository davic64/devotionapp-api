const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.db.name,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected");
  } catch (error) {
    console.log("❌ DB connection error: ", error);
    setTimeout(connection, 2000);
  }
};

connection();

// Services
const create = async (Model, data, fields = []) => {
  try {
    const newData = await Model.create(data, { fields });
    return newData;
  } catch (error) {
    return error;
  }
};

const list = async (Model, filters = {}) => {
  try {
    const dataList = Model.findAll({
      where: filters,
    });
    return dataList;
  } catch (error) {
    return error;
  }
};

const get = async (Model, item) => {
  try {
    const uniqueData = Model.findOne({ where: item });
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
    });
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

const query = (module.exports = {
  sequelize,
  create,
  list,
  get,
  update,
  destroy,
});
