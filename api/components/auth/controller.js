const User = require("../user/model");
const { verifyPassword } = require("../../../utils/cryptPass");
const auth = require("../../../auth");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const login = async (email, password) => {
    const dataUser = await store.get(User, { email });
    if (!dataUser)
      throw Object.assign(
        new Error("This email doesn't match any registered account"),
        { statusCode: 404 }
      );
    verifyPassword(password, dataUser.password);

    return auth.sign({ dataUser });
  };

  return {
    login,
  };
};
