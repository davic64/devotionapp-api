const { User } = require("./model");
const { cryptPassword } = require("../../../utils/cryptPass");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const createUser = async (userData) => {
    const { name, email, password, location } = userData;

    const newUser = new User({ name, email, password, location });
    newUser.password = cryptPassword(password);

    const user = await store.create(newUser);

    return user;
  };

  return {
    createUser,
  };
};
