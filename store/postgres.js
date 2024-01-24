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
    // await sequelize.sync({ force: true });
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

const upsert = async (Model, data, id) => {
  try {
    const existingDevo = await Model.findByPk(id);

    if (existingDevo) {
      const [updatedCount, updatedDevotional] = await Model.update(data, {
        where: { id },
        returning: true,
      });

      if (updatedCount > 0) {
        return updatedDevotional[0].get({ plain: true });
      } else {
        return null;
      }
    } else {
      const newDevotional = await Model.create(data);
      return newDevotional.get({ plain: true });
    }
  } catch (error) {
    return error;
  }
};

const list = async (Model, filters = {}, include = []) => {
  try {
    const dataList = await Model.findAll({
      where: filters,
      include: include,
    });
    return dataList;
  } catch (error) {
    return error;
  }
};

const get = async (Model, item, include = []) => {
  try {
    const uniqueData = await Model.findOne({ where: item, include });
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
  upsert,
  list,
  get,
  update,
  destroy,
};
