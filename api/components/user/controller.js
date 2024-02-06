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

  const getUser = async (id) => {
    const user = store.get(User, { id });
    return user;
  };

  const getUsersList = async (location) => {
    const users = store.list(User, { location });
    return users;
  };

  const updateUser = async (id, userData) => {
    const { password, ...restUserData } = userData;
    if (password) restUserData.password = cryptPassword(password);

    const user = store.update(User, id, restUserData);
    return user;
  };

  return {
    createUser,
    getUser,
    getUsersList,
    updateUser,
  };
};
